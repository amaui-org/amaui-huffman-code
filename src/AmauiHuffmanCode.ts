import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';
import copy from '@amaui/utils/copy';
import to from '@amaui/utils/to';
import binaryStringToHexadecimal from '@amaui/utils/binaryStringToHexadecimal';
import hexadecimalStringToBinary from '@amaui/utils/hexadecimalStringToBinary';
import AmauiDate from '@amaui/date/AmauiDate';
import duration from '@amaui/date/duration';
import { TMethod } from '@amaui/models';

export type TArrayVariant = 'preorder';

interface IAmauiNode {
  value: number;
  word?: any;
  path?: string;
  left: AmauiNode;
  right: AmauiNode;

  [p: string]: any;
}

export class AmauiHuffmanCodeResponse {

  public constructor(
    public value: any = '',
    public values?: Record<string, string>,
    public values_encoded?: any,
    public probabilities?: Record<string, number>,
    public efficiency?: number,
    public redundency?: number,
    public entropy?: number,
    public original_byte_size?: number,
    public values_byte_size?: number,
    public value_byte_size?: number,
    public encoded_byte_size?: number,
    public compression_ratio?: number,
    public compression_percentage?: number,
    public positive?: boolean,
    public average_code_word_length?: number,
    public performance_milliseconds?: number,
    public performance?: string
  ) { }

}

export class AmauiNode implements IAmauiNode {
  public left: AmauiNode;
  public right: AmauiNode;

  [p: string]: any;

  public constructor(
    public value = 1,
    public word?: any
  ) {
    this.value = Number(value.toFixed(3));
  }

  public get leaf(): boolean {
    return !(this.left || this.right);
  }

  public get maxDepth(): number {
    const maxDepthMethod = (value: AmauiNode): number => {
      if (value === undefined) return 0;

      return Math.max(1 + maxDepthMethod(value.left), 1 + maxDepthMethod(value.right));
    };

    return maxDepthMethod(this);
  }
}

interface IAmauiHuffmanTree {
  root: AmauiNode;
}

export class AmauiHuffmanTree implements IAmauiHuffmanTree {
  public root: AmauiNode;

  public static make(value: Array<any>): AmauiHuffmanTree { return new AmauiHuffmanTree().make(value); }

  public get array(): Array<any> {
    const value = [];

    this.preorder(this.root, (value_: AmauiNode) => {
      value.push(value_.word ? value_.word : value_ === this.root ? 0 : value_.path?.slice(-1));
    });

    return value;
  }

  public isRoot(value: AmauiNode): boolean {
    return value === this.root;
  }

  public preorder(value: AmauiNode, method: TMethod): void {
    if (value !== undefined && is('function', method)) {
      method(value, value.left, value.right);

      this.preorder(value.left, method);
      this.preorder(value.right, method);
    }
  }

  public make(value_: Array<any>): AmauiHuffmanTree {
    const items = copy(value_);

    const amauiHuffmanTree = new AmauiHuffmanTree();

    amauiHuffmanTree.root = new AmauiNode();
    amauiHuffmanTree.root.index = 0;

    function arrayToAmauiHuffmanTree(value: AmauiNode) {
      if (items[0] === '0' && !value.left) {
        value.left = new AmauiNode();

        value.left.index = 2 * value.index + 1;
        value.left.path = '0';

        items.splice(0, 1);

        arrayToAmauiHuffmanTree(value.left);
      }

      if (items[0] === '1' && !value.right) {
        value.right = new AmauiNode();

        value.right.index = 2 * value.index + 2;
        value.right.path = '1';

        items.splice(0, 1);

        arrayToAmauiHuffmanTree(value.right);
      }

      if (is('array', items[0])) {
        if (items[0].length) {
          if (!value.left) {
            value.left = new AmauiNode(1, items[0][0]);

            value.left.index = 2 * value.index + 1;
            value.left.path = '0';

            (items[0] as unknown as Array<any>).splice(0, 1);
          }

          if (!value.right && items[0].length) {
            value.right = new AmauiNode(1, items[0][0]);

            value.right.index = 2 * value.index + 2;
            value.right.path = '1';

            (items[0] as unknown as Array<any>).splice(0, 1);
          }

          if (!items[0].length) items.splice(0, 1);
        }
        else items.splice(0, 1);
      }

      if (items[0] === '1' && !value.right) arrayToAmauiHuffmanTree(value);
    }

    arrayToAmauiHuffmanTree(amauiHuffmanTree.root);

    return amauiHuffmanTree;
  }
}

export type TEncoding = 'binary' | 'hexadecimal';

export interface IOptions {
  encode_values?: boolean;
  base64?: boolean;
}

export const optionsDefault: IOptions = {
  encode_values: true,
  base64: true
};

class AmauiHuffmanCode {
  public options: IOptions;
  public huffmanTree: AmauiHuffmanTree;
  public probabilities: Record<string, number> = {};
  public values: Record<string, string> = {};
  public response: AmauiHuffmanCodeResponse = new AmauiHuffmanCodeResponse();
  private startTime: number;

  public static get AmauiHuffmanCodeResponse() { return AmauiHuffmanCodeResponse; }

  public static get AmauiNode() { return AmauiNode; }

  public static get AmauiHuffmanTree() { return AmauiHuffmanTree; }

  public static encodeValue(value: string): string {
    if (!(is('string', value) && value.length)) return '';

    // Add 1 at the start of every 3 characters
    // it's more data, but there will be no bugs
    // with padded 0s, a bug fix for now
    return binaryStringToHexadecimal((value.match(/.{1,3}/g) || []).map(item => 1 + item).join('')).match(/.{1,2}/g).flatMap(item => {
      if (item[0] === '0') return item.split('').map(item_ => String.fromCharCode(parseInt(item_, 16)));

      return String.fromCharCode(parseInt(item, 16));
    }).join('');
  }

  public static decodeValue(value_: string): string {
    if (!(is('string', value_) && value_.length)) return '';

    const value = value_.split('').map(item => item.charCodeAt(0).toString(16)).join('');

    return (hexadecimalStringToBinary(value).match(/.{1,4}/g) || []).map(item => item.slice(1)).join('');
  }

  public static encodeValues(values: Record<string, string>, encodeValues: boolean = true): string | object {
    if (values) {
      let result = '';

      const keys = Object.keys(values);

      keys.forEach((item, index) => result += `${item}${encodeValues ? this.encodeValue(values[item]) : values[item]}${index < keys.length - 1 ? ' ' : ''}`);

      return `${encodeValues ? 1 : 0}${result}`;
    }
  }

  public static decodeValues(value: string): object {
    const result = {};

    const values = [];

    if (value) {
      const encodeValues = value[0] === '1';

      const values_ = value.slice(1).split(' ');

      values_.forEach((item, index) => {
        if (!item) values_[index + 1] = ` ${values_[index + 1]}`;
        else values.push(item);
      });

      values.forEach(item => result[item[0]] = encodeValues ? this.decodeValue(item.slice(1)) : item.slice(1));
    }

    return result;
  }

  public static getValues(amauiHuffmanTree: AmauiHuffmanTree): Record<string, string> {
    const values = {};
    const leafs = [];

    if (amauiHuffmanTree) {
      amauiHuffmanTree.preorder(amauiHuffmanTree.root, (value: AmauiNode, left: AmauiNode, right: AmauiNode) => {
        if (amauiHuffmanTree.isRoot(value)) {
          value.path = value.maxDepth === 1 ? '0' : '';

          if (value.leaf) leafs.push(value);
        }

        if (left) {
          left.path = value.path + 0;

          if (left.leaf) leafs.push(left);
        }

        if (right) {
          right.path = value.path + 1;

          if (right.leaf) leafs.push(right);
        }
      });
    }

    leafs.filter(leaf => leaf.word).forEach(leaf => values[leaf.word] = leaf.path);

    return values;
  }

  public static decode(value: string, values: Record<string, string>) {
    const instance = new AmauiHuffmanCode();

    instance.values = values;

    return instance.decode(value);
  }

  public static encodeBase64(value: string): string {
    return to(value, 'base64') as string;
  }

  public static decodeBase64(value: string): string {
    return to(value, 'string') as string;
  }

  public get encoded(): AmauiHuffmanCodeResponse {
    return this.response;
  }

  public get entropy(): number {
    const output = Object.keys(this.probabilities).reduce((result, key) => result += this.probabilities[key] * (Math.log2(this.probabilities[key])), 0);

    return Math.abs(Number(output.toFixed(3)));
  }

  public get averageCodeWordLength(): number {
    const output = Object.keys(this.probabilities).reduce((result, key) => result += this.probabilities[key] * (this.values[key]?.length || 8), 0);

    return Number((output).toFixed(3));
  }

  public get redundency(): number {
    return Number(Math.abs(this.entropy - this.averageCodeWordLength).toFixed(3));
  }

  public get efficiency(): number {
    return Number(((this.entropy / this.averageCodeWordLength) || 0).toFixed(3));
  }

  public constructor(
    public value?: string,
    options: IOptions = optionsDefault
  ) {
    this.options = merge(options, optionsDefault);

    if (this.value !== undefined) this.init();
  }

  private init(): void {
    this.startTime = AmauiDate.milliseconds;

    if (!Object.keys(this.probabilities).length && is('string', this.value)) {
      // Frequencies
      this.getProbabilities();
    }

    if (!Object.keys(this.values).length && Object.keys(this.probabilities).length) {
      // Normalize probabilities
      this.normalizeProbabilities();

      // Make huffman tree
      this.makeHuffmanTree();

      // Values
      this.values = AmauiHuffmanCode.getValues(this.huffmanTree);
    }

    // Encode
    this.encode();
  }

  public encode(): AmauiHuffmanCodeResponse {
    const response: AmauiHuffmanCodeResponse = new AmauiHuffmanCodeResponse();

    if (Object.keys(this.values).length && is('string', this.value)) {
      let value = Array.from(this.value).reduce((result, item) => result += (this.values[item] || item), '');

      value = AmauiHuffmanCode.encodeValue(value);

      if (this.options.base64) value = AmauiHuffmanCode.encodeBase64(value);

      response.value = value;
      response.performance_milliseconds = AmauiDate.milliseconds - this.startTime;
      response.performance = duration(response.performance_milliseconds) || '0 milliseconds';
      response.values = this.values;
      response.values_encoded = AmauiHuffmanCode.encodeValues(this.values, this.options.encode_values);
      response.probabilities = this.probabilities;
      response.efficiency = this.efficiency;
      response.redundency = this.redundency;
      response.entropy = this.entropy;
      response.average_code_word_length = this.averageCodeWordLength;
      response.original_byte_size = to(this.value, 'byte-size') as number;
      response.values_byte_size = to(response.values_encoded, 'byte-size') as number;
      response.value_byte_size = to(value, 'byte-size') as number;
      response.encoded_byte_size = response.values_byte_size + response.value_byte_size;
      response.compression_ratio = Number((((response.encoded_byte_size + response.original_byte_size) / response.encoded_byte_size) - 1).toFixed(2));
      response.compression_percentage = response.original_byte_size === 0 ? response.value_byte_size === 0 ? 0 : response.value_byte_size * -100 : Number((((response.original_byte_size - response.encoded_byte_size) / response.original_byte_size) * 100).toFixed(2));
      response.positive = response.compression_ratio > 1;

      this.response = response;
    }

    return response;
  }

  public decode(value_: string): AmauiHuffmanCodeResponse {
    if (!value_) return new AmauiHuffmanCodeResponse(value_);

    const response = new AmauiHuffmanCodeResponse(value_);

    const startTime = AmauiDate.milliseconds;

    const value = AmauiHuffmanCode.decodeValue(AmauiHuffmanCode.decodeBase64(value_));

    if (is('string', value) && Object.keys(this.values).length) {
      let input = value;
      let output = '';

      while (input.length) {
        let valueWord = Object.keys(this.values).find(key => input.indexOf(this.values[key]) === 0);

        if (!valueWord) {
          // bug
          valueWord = (
            Object.keys(this.values).find(key => ('0' + input).indexOf(this.values[key]) === 0) ||
            Object.keys(this.values).find(key => ('00' + input).indexOf(this.values[key]) === 0)
          );

          if (!valueWord) break;
        }

        output += valueWord;

        input = input.slice(this.values[valueWord].length);
      }

      response.value = output;
      response.performance_milliseconds = AmauiDate.milliseconds - startTime;
      response.performance = duration(response.performance_milliseconds) || '0 milliseconds';
      response.original_byte_size = to(output, 'byte-size') as number;
      response.value_byte_size = to(value_, 'byte-size') as number;
    }

    return response;
  }

  public getProbabilities(): Record<string, number> {
    const value = this.value || '';

    for (let i = 0; i < value.length; i++) {
      this.probabilities[value[i]] = ~~this.probabilities[value[i]] + 1;
    }

    return this.probabilities;
  }

  public normalizeProbabilities(): Record<string, number> {
    const sum = Object.keys(this.probabilities).reduce((result, item) => result += this.probabilities[item], 0);

    Object.keys(this.probabilities).forEach(key => this.probabilities[key] = Number((this.probabilities[key] / sum).toFixed(4)));

    return this.probabilities;
  }

  public makeHuffmanTree(): AmauiHuffmanTree {
    let trees = [];

    Object.keys(this.probabilities).forEach(key => {
      const amauiNode = new AmauiNode(this.probabilities[key], key);

      trees.push(amauiNode);
    });

    trees.sort((a, b) => a.value - b.value);

    while (trees.length > 1) {
      const first = trees[0];
      const second = trees[1];

      const newNode = new AmauiNode(first.value + second.value);

      const children = [first, second].sort((a, b) => {
        const aMaxDepth = a.maxDepth;
        const bMaxDepth = b.maxDepth;

        if (
          (a.leaf && b.leaf) ||
          (aMaxDepth === b.maxDepth)
        ) return b.value - a.value;

        if (a.leaf || b.leaf) return a.leaf ? -1 : 1;

        return aMaxDepth - bMaxDepth;
      });

      newNode.left = children[0];
      newNode.right = children[1];

      trees.push(newNode);

      trees = trees.slice(2);

      trees.sort((a, b) => a.value - b.value);
    }

    this.huffmanTree = new AmauiHuffmanTree();

    this.huffmanTree.root = trees[0];

    return this.huffmanTree;
  }
}

export default AmauiHuffmanCode;
