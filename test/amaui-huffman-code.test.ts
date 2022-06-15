/* tslint:disable: no-shadowed-variable */
import { assert } from '@amaui/test';

import { startBrowsers, IBrowsers, evaluate, closeBrowsers } from '../utils/js/test/utils';

import AmauiHuffmanCode from '../src';

group('@amaui/huffman-code', () => {
  let browsers: IBrowsers;

  pre(async () => browsers = await startBrowsers());

  post(async () => {
    await closeBrowsers(browsers);
  });

  to('AmauiHuffmanCodeResponse', async () => {
    const value = new AmauiHuffmanCode.AmauiHuffmanCodeResponse(
      'a',
      { a: '1' },
      'e',
      { a: 1.04 },
      1,
      1,
      1,
      14,
      1.4,
      4,
      7,
      1.4,
      40.4,
      true,
      4.04,
      1.04,
      '1 milliseconds'
    );

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.AmauiHuffmanCode.AmauiHuffmanCodeResponse(
        'a',
        { a: '1' },
        'e',
        { a: 1.04 },
        1,
        1,
        1,
        14,
        1.4,
        4,
        7,
        1.4,
        40.4,
        true,
        4.04,
        1.04,
        '1 milliseconds'
      );

      return value;
    }, { browsers });
    const valueNode = value;
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql({
      value: 'a',
      values: { a: '1' },
      values_encoded: 'e',
      probabilities: { a: 1.04 },
      efficiency: 1,
      redundency: 1,
      entropy: 1,
      original_byte_size: 14,
      values_byte_size: 1.4,
      value_byte_size: 4,
      encoded_byte_size: 7,
      compression_ratio: 1.4,
      compression_percentage: 40.4,
      positive: true,
      average_code_word_length: 4.04,
      encode_execution_milliseconds: 1.04,
      encode_execution: '1 milliseconds',
    }));
  });

  to('AmauiNode', async () => {
    const value = new AmauiHuffmanCode.AmauiNode(1, 'a');

    value.left = new AmauiHuffmanCode.AmauiNode(11);
    value.right = new AmauiHuffmanCode.AmauiNode(14);

    const valueBrowsers = await evaluate((window: any) => {
      const value = new window.AmauiHuffmanCode.AmauiNode(1, 'a');

      value.left = new window.AmauiHuffmanCode.AmauiNode(11);
      value.right = new window.AmauiHuffmanCode.AmauiNode(14);

      return [
        value.value,
        value.word,
        value.leaf,
        value.maxDepth,
        value.left.value,
        value.left.leaf,
        value.left.maxDepth,
        value.right.value,
        value.right.leaf,
        value.right.maxDepth,
      ];
    }, { browsers });
    const valueNode = [
      value.value,
      value.word,
      value.leaf,
      value.maxDepth,
      value.left.value,
      value.left.leaf,
      value.left.maxDepth,
      value.right.value,
      value.right.leaf,
      value.right.maxDepth,
    ];
    const values = [valueNode, ...valueBrowsers];

    values.forEach(value => assert(value).eql([
      1,
      'a',
      false,
      2,
      11,
      true,
      1,
      14,
      true,
      1,
    ]));
  });

  group('AmauiHuffmanTree', () => {

    group('AmauiHuffmanTree', () => {

      to('make', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([]),
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([
              ['a'],
            ]),
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.AmauiHuffmanTree.make([]),
          AmauiHuffmanCode.AmauiHuffmanTree.make([
            ['a'],
          ]),
          AmauiHuffmanCode.AmauiHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

    });

    group('amauiHuffmanTree', () => {

      to('array', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([]),
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([
              ['a'],
            ]),
            window.AmauiHuffmanCode.AmauiHuffmanTree.make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.AmauiHuffmanTree.make([]),
          AmauiHuffmanCode.AmauiHuffmanTree.make([
            ['a'],
          ]),
          AmauiHuffmanCode.AmauiHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

      to('isRoot', async () => {
        const tree = AmauiHuffmanCode.AmauiHuffmanTree.make(['0', ['a']]);

        const valueBrowsers = await evaluate((window: any) => {
          const tree = window.AmauiHuffmanCode.AmauiHuffmanTree.make(['0', ['a']]);

          return [
            tree.isRoot(tree.root),
            tree.isRoot(tree.root.left),
          ];
        }, { browsers });
        const valueNode = [
          tree.isRoot(tree.root),
          tree.isRoot(tree.root.left),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
          false,
        ]));
      });

      to('array', async () => {
        const tree = AmauiHuffmanCode.AmauiHuffmanTree.make([
          '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
        ]);

        const values_ = [];

        tree.preorder(tree.root, amauiNode => values_.push(amauiNode.word || 1));

        const valueBrowsers = await evaluate((window: any) => {
          const tree = window.AmauiHuffmanCode.AmauiHuffmanTree.make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]);

          const values_ = [];

          tree.preorder(tree.root, amauiNode => values_.push(amauiNode.word || 1));

          return values_;
        }, { browsers });
        const valueNode = values_;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          1, 1, 1, 'e', 1, 'o', 'n', 1, 1, 'u', 1, 'd', 'c', 1, 'r', 1, 1, 1, 'g', 'b', 1, '1', 1, 'v', 'D', 1, 1, 'h', 1, 'I', 'C', 1, 'f', 1, 'P', 'j', 1, 1, 1, 'i', 't', 1, 's', 1, 'l', 'm', 1, ' ', 1, 'a', 1, 1, 'p', '.', 1, ',', 1, 'q', 1, 1, '0', 'L', 1, 'F', 'S',
        ]));
      });

      to('make', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode.AmauiHuffmanTree().make([]),
            new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              ['a'],
            ]),
            new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ]),
          ]
            .map(item => item.array.filter(Boolean));
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode.AmauiHuffmanTree().make([]),
          new AmauiHuffmanCode.AmauiHuffmanTree().make([
            ['a'],
          ]),
          new AmauiHuffmanCode.AmauiHuffmanTree().make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ]),
        ]
          .map(item => item.array.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['0', '0', 'e', '1', 'o', 'n', '1', '0', 'u', '1', 'd', 'c', '1', 'r', '1', '0', '0', 'g', 'b', '1', '1', '1', 'v', 'D', '1', '0', 'h', '1', 'I', 'C', '1', 'f', '1', 'P', 'j', '1', '0', '0', 'i', 't', '1', 's', '1', 'l', 'm', '1', ' ', '1', 'a', '1', '0', 'p', '.', '1', ',', '1', 'q', '1', '0', '0', 'L', '1', 'F', 'S'],
        ]));
      });

    });

  });

  group('AmauiHuffmanCode', () => {

    group('AmauiHuffmanCode', () => {

      to('AmauiHuffmanCodeResponse', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode.AmauiHuffmanCodeResponse() instanceof window.AmauiHuffmanCode.AmauiHuffmanCodeResponse,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode.AmauiHuffmanCodeResponse() instanceof AmauiHuffmanCode.AmauiHuffmanCodeResponse,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('AmauiNode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode.AmauiNode() instanceof window.AmauiHuffmanCode.AmauiNode,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode.AmauiNode() instanceof AmauiHuffmanCode.AmauiNode,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('AmauiHuffmanTree', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode.AmauiHuffmanTree() instanceof window.AmauiHuffmanCode.AmauiHuffmanTree,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode.AmauiHuffmanTree() instanceof AmauiHuffmanCode.AmauiHuffmanTree,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          true,
        ]));
      });

      to('encodeValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.encodeValue(''),
            window.AmauiHuffmanCode.encodeValue('0'),
            window.AmauiHuffmanCode.encodeValue('11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101'),
          ]
            .map(item => Array.from(new TextEncoder().encode(item)));
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.encodeValue(''),
          AmauiHuffmanCode.encodeValue('0'),
          AmauiHuffmanCode.encodeValue('11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101'),
        ]
          .map(item => Array.from(new TextEncoder().encode(item)));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          [0, 2, 0],
          [0, 2, 195, 190, 194, 147, 0, 11, 195, 167, 78, 194, 157, 127, 29, 104, 195, 178, 194, 146, 195, 185, 69, 98, 109, 81, 59, 194, 174, 39, 195, 172, 194, 178, 58, 0, 11, 194, 145, 40, 195, 155, 194, 149, 30, 69, 46, 0, 13, 195, 134, 22, 194, 137, 195, 183, 127, 194, 146, 194, 150, 50, 194, 138, 195, 132, 195, 154, 194, 133, 195, 190, 195, 143, 194, 185, 113, 104, 194, 168, 194, 173, 65, 88, 55, 78, 194, 168, 194, 157, 195, 151, 19, 195, 182, 195, 177, 195, 167, 48, 194, 150, 195, 172, 195, 166, 195, 156, 106, 194, 137, 195, 156, 194, 142, 16, 123, 194, 191, 195, 161, 90, 21, 194, 188, 194, 183, 44, 55, 78, 124, 45, 21, 195, 182, 194, 191, 88, 82, 114, 194, 187, 50, 75, 37, 195, 177, 195, 133, 91, 195, 156, 195, 180, 121, 45, 45, 0, 11, 21, 194, 168, 43, 95, 194, 145, 194, 162, 194, 179, 195, 168, 56, 114, 194, 149, 194, 175, 195, 150, 20, 194, 156, 194, 174, 195, 183, 61, 195, 155, 194, 170, 194, 183, 121, 32, 195, 167, 79, 46, 38, 53, 18, 195, 160, 194, 171, 195, 178, 110, 86, 194, 180, 73, 55, 105, 38, 195, 188, 194, 128, 195, 167, 120, 27, 44, 194, 141, 28, 195, 135, 99, 42, 194, 150, 195, 175, 194, 183, 194, 129, 194, 180, 26, 195, 135, 194, 146, 85, 194, 158, 69, 195, 129, 195, 176, 42, 195, 183, 61, 28, 194, 135, 0, 1, 194, 178, 195, 145, 194, 169, 43, 195, 172, 74, 194, 130, 195, 144, 194, 172, 195, 137, 44, 194, 151, 195, 142, 109, 195, 134, 194, 168, 194, 159, 194, 177, 194, 143, 195, 136, 51, 194, 176, 194, 180, 78, 195, 171, 71, 195, 164, 195, 171, 195, 162, 84, 23, 195, 155, 194, 167, 51, 195, 130, 53, 194, 165, 97, 104, 194, 156, 42, 113, 194, 133, 195, 160, 195, 157, 62, 195, 167, 195, 166, 40, 60, 28, 0, 10, 194, 158, 194, 173, 126, 70, 194, 138, 195, 130, 195, 145, 63, 106, 194, 137, 195, 157, 113, 58, 195, 165, 97, 83, 0, 3, 28, 84, 106, 23, 195, 176, 54, 195, 169, 195, 183, 61, 194, 183, 86, 194, 131, 194, 144, 195, 138, 75, 195, 171, 195, 181, 87, 99, 0, 11, 195, 151, 43, 0, 10, 194, 152, 25, 194, 146, 89, 47, 195, 174, 119, 72, 194, 172, 194, 178, 194, 189, 195, 137, 69, 194, 157, 194, 129, 194, 131, 195, 169, 194, 138, 195, 143, 195, 169, 82, 95, 110, 94, 195, 176, 194, 154, 123, 72, 194, 181, 194, 146, 194, 183, 194, 130, 195, 150, 0, 7, 34, 194, 191, 32, 195, 148, 21, 195, 174, 119, 35, 0, 11, 195, 130, 113, 195, 133, 70, 195, 164, 194, 186, 87, 5],
        ]));
      });

      to('decodeValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.decodeValue(''),
            window.AmauiHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 0]))),
            window.AmauiHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 195, 190, 194, 147, 0, 11, 195, 167, 78, 194, 157, 127, 29, 104, 195, 178, 194, 146, 195, 185, 69, 98, 109, 81, 59, 194, 174, 39, 195, 172, 194, 178, 58, 0, 11, 194, 145, 40, 195, 155, 194, 149, 30, 69, 46, 0, 13, 195, 134, 22, 194, 137, 195, 183, 127, 194, 146, 194, 150, 50, 194, 138, 195, 132, 195, 154, 194, 133, 195, 190, 195, 143, 194, 185, 113, 104, 194, 168, 194, 173, 65, 88, 55, 78, 194, 168, 194, 157, 195, 151, 19, 195, 182, 195, 177, 195, 167, 48, 194, 150, 195, 172, 195, 166, 195, 156, 106, 194, 137, 195, 156, 194, 142, 16, 123, 194, 191, 195, 161, 90, 21, 194, 188, 194, 183, 44, 55, 78, 124, 45, 21, 195, 182, 194, 191, 88, 82, 114, 194, 187, 50, 75, 37, 195, 177, 195, 133, 91, 195, 156, 195, 180, 121, 45, 45, 0, 11, 21, 194, 168, 43, 95, 194, 145, 194, 162, 194, 179, 195, 168, 56, 114, 194, 149, 194, 175, 195, 150, 20, 194, 156, 194, 174, 195, 183, 61, 195, 155, 194, 170, 194, 183, 121, 32, 195, 167, 79, 46, 38, 53, 18, 195, 160, 194, 171, 195, 178, 110, 86, 194, 180, 73, 55, 105, 38, 195, 188, 194, 128, 195, 167, 120, 27, 44, 194, 141, 28, 195, 135, 99, 42, 194, 150, 195, 175, 194, 183, 194, 129, 194, 180, 26, 195, 135, 194, 146, 85, 194, 158, 69, 195, 129, 195, 176, 42, 195, 183, 61, 28, 194, 135, 0, 1, 194, 178, 195, 145, 194, 169, 43, 195, 172, 74, 194, 130, 195, 144, 194, 172, 195, 137, 44, 194, 151, 195, 142, 109, 195, 134, 194, 168, 194, 159, 194, 177, 194, 143, 195, 136, 51, 194, 176, 194, 180, 78, 195, 171, 71, 195, 164, 195, 171, 195, 162, 84, 23, 195, 155, 194, 167, 51, 195, 130, 53, 194, 165, 97, 104, 194, 156, 42, 113, 194, 133, 195, 160, 195, 157, 62, 195, 167, 195, 166, 40, 60, 28, 0, 10, 194, 158, 194, 173, 126, 70, 194, 138, 195, 130, 195, 145, 63, 106, 194, 137, 195, 157, 113, 58, 195, 165, 97, 83, 0, 3, 28, 84, 106, 23, 195, 176, 54, 195, 169, 195, 183, 61, 194, 183, 86, 194, 131, 194, 144, 195, 138, 75, 195, 171, 195, 181, 87, 99, 0, 11, 195, 151, 43, 0, 10, 194, 152, 25, 194, 146, 89, 47, 195, 174, 119, 72, 194, 172, 194, 178, 194, 189, 195, 137, 69, 194, 157, 194, 129, 194, 131, 195, 169, 194, 138, 195, 143, 195, 169, 82, 95, 110, 94, 195, 176, 194, 154, 123, 72, 194, 181, 194, 146, 194, 183, 194, 130, 195, 150, 0, 7, 34, 194, 191, 32, 195, 148, 21, 195, 174, 119, 35, 0, 11, 195, 130, 113, 195, 133, 70, 195, 164, 194, 186, 87, 5]))),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.decodeValue(''),
          AmauiHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 0]))),
          AmauiHuffmanCode.decodeValue(new TextDecoder().decode(new Uint8Array([0, 2, 195, 190, 194, 147, 0, 11, 195, 167, 78, 194, 157, 127, 29, 104, 195, 178, 194, 146, 195, 185, 69, 98, 109, 81, 59, 194, 174, 39, 195, 172, 194, 178, 58, 0, 11, 194, 145, 40, 195, 155, 194, 149, 30, 69, 46, 0, 13, 195, 134, 22, 194, 137, 195, 183, 127, 194, 146, 194, 150, 50, 194, 138, 195, 132, 195, 154, 194, 133, 195, 190, 195, 143, 194, 185, 113, 104, 194, 168, 194, 173, 65, 88, 55, 78, 194, 168, 194, 157, 195, 151, 19, 195, 182, 195, 177, 195, 167, 48, 194, 150, 195, 172, 195, 166, 195, 156, 106, 194, 137, 195, 156, 194, 142, 16, 123, 194, 191, 195, 161, 90, 21, 194, 188, 194, 183, 44, 55, 78, 124, 45, 21, 195, 182, 194, 191, 88, 82, 114, 194, 187, 50, 75, 37, 195, 177, 195, 133, 91, 195, 156, 195, 180, 121, 45, 45, 0, 11, 21, 194, 168, 43, 95, 194, 145, 194, 162, 194, 179, 195, 168, 56, 114, 194, 149, 194, 175, 195, 150, 20, 194, 156, 194, 174, 195, 183, 61, 195, 155, 194, 170, 194, 183, 121, 32, 195, 167, 79, 46, 38, 53, 18, 195, 160, 194, 171, 195, 178, 110, 86, 194, 180, 73, 55, 105, 38, 195, 188, 194, 128, 195, 167, 120, 27, 44, 194, 141, 28, 195, 135, 99, 42, 194, 150, 195, 175, 194, 183, 194, 129, 194, 180, 26, 195, 135, 194, 146, 85, 194, 158, 69, 195, 129, 195, 176, 42, 195, 183, 61, 28, 194, 135, 0, 1, 194, 178, 195, 145, 194, 169, 43, 195, 172, 74, 194, 130, 195, 144, 194, 172, 195, 137, 44, 194, 151, 195, 142, 109, 195, 134, 194, 168, 194, 159, 194, 177, 194, 143, 195, 136, 51, 194, 176, 194, 180, 78, 195, 171, 71, 195, 164, 195, 171, 195, 162, 84, 23, 195, 155, 194, 167, 51, 195, 130, 53, 194, 165, 97, 104, 194, 156, 42, 113, 194, 133, 195, 160, 195, 157, 62, 195, 167, 195, 166, 40, 60, 28, 0, 10, 194, 158, 194, 173, 126, 70, 194, 138, 195, 130, 195, 145, 63, 106, 194, 137, 195, 157, 113, 58, 195, 165, 97, 83, 0, 3, 28, 84, 106, 23, 195, 176, 54, 195, 169, 195, 183, 61, 194, 183, 86, 194, 131, 194, 144, 195, 138, 75, 195, 171, 195, 181, 87, 99, 0, 11, 195, 151, 43, 0, 10, 194, 152, 25, 194, 146, 89, 47, 195, 174, 119, 72, 194, 172, 194, 178, 194, 189, 195, 137, 69, 194, 157, 194, 129, 194, 131, 195, 169, 194, 138, 195, 143, 195, 169, 82, 95, 110, 94, 195, 176, 194, 154, 123, 72, 194, 181, 194, 146, 194, 183, 194, 130, 195, 150, 0, 7, 34, 194, 191, 32, 195, 148, 21, 195, 174, 119, 35, 0, 11, 195, 130, 113, 195, 133, 70, 195, 164, 194, 186, 87, 5]))),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '0',
          '11111110100100110000101111100111010011101001110101111111000111010110100011110010100100101111100101000101011000100110110101010001001110111010111000100111111011001011001000111010000010111001000100101000110110111001010100011110010001010010111000001101110001100001011010001001111101110111111110010010100101100011001010001010110001001101101010000101111111101100111110111001011100010110100010101000101011010100000101011000001101110100111010101000100111011101011100010011111101101111000111100111001100001001011011101100111001101101110001101010100010011101110010001110000100000111101110111111111000010101101000010101101111001011011100101100001101110100111001111100001011010001010111110110101111110101100001010010011100101011101100110010010010110010010111110001110001010101101111011100111101000111100100101101001011010000101100010101101010000010101101011111100100011010001010110011111010000011100001110010100101011010111111010110000101001001110010101110111101110011110111011011101010101011011101111001001000001110011101001111001011100010011000110101000100101110000010101011111100100110111001010110101101000100100100110111011010010010011011111100100000001110011101111000000110110010110010001101000111001100011101100011001010101001011011101111101101111000000110110100000110101100011110010010010101011001111001000101110000011111000000101010111101110011110100011100100001110000000110110010110100011010100100101011111011000100101010000010110100001010110011001001001011001001011111001110011011011100011010101000100111111011000110001111110010000011001110110000101101000100111011101011010001111110010011101011111000100101010000010111110110111010011100110011110000100011010110100101011000010110100010011100001010100111000110000101111000001101110100111110111001111110011000101000001111000001110000001010100111101010110101111110010001101000101011000010110100010011111101101010100010011101110101110001001110101110010101100001010100110000001100011100010101000110101000010111111100000011011011101001111101110011110110110111010101101000001110010000110010100100101111101011111101010101011101100011000010111101011100101011000010101001100000011001100100100101100100101111111011100111011101001000101011001011001010111101110010010100010110011101100000011000001111101001100010101100111111101001010100100101111101101110010111101111000010011010011110110100100010110101100100101011011110000010110101100000011100100010101111110010000011010100000101011110111001110111001000110000101111000010011100011100010101000110111001001011101001010111101',
        ]));
      });

      to('encodeValuesValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.encodeValuesValue(''),
            window.AmauiHuffmanCode.encodeValuesValue([]),
            window.AmauiHuffmanCode.encodeValuesValue('1'),
            window.AmauiHuffmanCode.encodeValuesValue('0'),
            window.AmauiHuffmanCode.encodeValuesValue('1010'),
            window.AmauiHuffmanCode.encodeValuesValue('1111011101011000110'),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.encodeValuesValue(''),
          AmauiHuffmanCode.encodeValuesValue([] as any),
          AmauiHuffmanCode.encodeValuesValue('1'),
          AmauiHuffmanCode.encodeValuesValue('0'),
          AmauiHuffmanCode.encodeValuesValue('1010'),
          AmauiHuffmanCode.encodeValuesValue('1111011101011000110'),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          undefined,
          '1',
          '0',
          'a',
          'auva',
        ]));
      });

      to('decodeValuesValue', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.decodeValuesValue(''),
            window.AmauiHuffmanCode.decodeValuesValue(undefined),
            window.AmauiHuffmanCode.decodeValuesValue('1'),
            window.AmauiHuffmanCode.decodeValuesValue('0'),
            window.AmauiHuffmanCode.decodeValuesValue('a'),
            window.AmauiHuffmanCode.decodeValuesValue('auva'),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.decodeValuesValue(''),
          AmauiHuffmanCode.decodeValuesValue(undefined as any),
          AmauiHuffmanCode.decodeValuesValue('1'),
          AmauiHuffmanCode.decodeValuesValue('0'),
          AmauiHuffmanCode.decodeValuesValue('a'),
          AmauiHuffmanCode.decodeValuesValue('auva'),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          undefined,
          '1',
          '0',
          '1010',
          '1111011101011000110',
        ]));
      });

      to('encodeValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.encodeValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([])),
            window.AmauiHuffmanCode.encodeValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              [' '],
            ])),
            window.AmauiHuffmanCode.encodeValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              ['a'],
            ])),
            window.AmauiHuffmanCode.encodeValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ])),
            window.AmauiHuffmanCode.encodeValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make(['0', '0', '0', ['t', 'u'], '1', ['i'], '1', ['o'], '1', ['.'], '1', ['q'], '1', ['f'], '1', ['\n'], '1', ['Q', 'x'], '1', [' '], '1', ['s'], '1', ['c'], '1', ['p'], '1', '0', '0', ['P', 'V'], '1', ['I', 'S'], '1', '0', ['M'], '1', ['F', 'E'], '1', '0', ['C', 'U'], '1', ['D', 'A'], '1', '0', ['e'], '1', ['r', 'n'], '1', '0', ['l'], '1', ['d'], '1', ['g', ','], '1', ['a'], '1', ['m'], '1', ['v'], '1', ['b'], '1', ['h'], '1', ['N'], '1', ['j', 'L']
            ])),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.encodeValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([])),
          AmauiHuffmanCode.encodeValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([
            [' '],
          ])),
          AmauiHuffmanCode.encodeValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([
            ['a'],
          ])),
          AmauiHuffmanCode.encodeValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ])),
          AmauiHuffmanCode.encodeValues(new AmauiHuffmanCode.AmauiHuffmanTree().make(['0', '0', '0', ['t', 'u'], '1', ['i'], '1', ['o'], '1', ['.'], '1', ['q'], '1', ['f'], '1', ['\n'], '1', ['Q', 'x'], '1', [' '], '1', ['s'], '1', ['c'], '1', ['p'], '1', '0', '0', ['P', 'V'], '1', ['I', 'S'], '1', '0', ['M'], '1', ['F', 'E'], '1', '0', ['C', 'U'], '1', ['D', 'A'], '1', '0', ['e'], '1', ['r', 'n'], '1', '0', ['l'], '1', ['d'], '1', ['g', ','], '1', ['a'], '1', ['m'], '1', ['v'], '1', ['b'], '1', ['h'], '1', ['N'], '1', ['j', 'L']
          ])),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '0',
          '1 ',
          '1a',
          '000 e 1 on 2 u 1 dc 1 r 4 gb 1 1 1 vD 2 h 1 IC 1 f 1 Pj 4 it 1 s 1 lm 1   1 a 2 p. 1 , 1 q 2 0L 1 FS',
          '0000 tu 1 i 1 o 1 . 1 q 1 f 1 \n 1 Qx 1   1 s 1 c 1 p 4 PV 1 IS 2 M 1 FE 2 CU 1 DA 2 e 1 rn 2 l 1 d 1 g, 1 a 1 m 1 v 1 b 1 h 1 N 1 jL',
        ]));
      });

      to('decodeValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.decodeValues('0'),
            window.AmauiHuffmanCode.decodeValues('1 '),
            window.AmauiHuffmanCode.decodeValues('1a'),
            window.AmauiHuffmanCode.decodeValues('000 e 1 on 2 u 1 dc 1 r 4 gb 1 1 1 vD 2 h 1 IC 1 f 1 Pj 4 it 1 s 1 lm 1   1 a 2 p. 1 , 1 q 2 0L 1 FS'),
            window.AmauiHuffmanCode.decodeValues('0000 tu 1 i 1 o 1 . 1 q 1 f 1 \n 1 Qx 1   1 s 1 c 1 p 4 PV 1 IS 2 M 1 FE 2 CU 1 DA 2 e 1 rn 2 l 1 d 1 g, 1 a 1 m 1 v 1 b 1 h 1 N 1 jL'),
            window.AmauiHuffmanCode.decodeValues('14 '),
            window.AmauiHuffmanCode.decodeValues('1 4'),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.decodeValues('0'),
          AmauiHuffmanCode.decodeValues('1 '),
          AmauiHuffmanCode.decodeValues('1a'),
          AmauiHuffmanCode.decodeValues('000 e 1 on 2 u 1 dc 1 r 4 gb 1 1 1 vD 2 h 1 IC 1 f 1 Pj 4 it 1 s 1 lm 1   1 a 2 p. 1 , 1 q 2 0L 1 FS'),
          AmauiHuffmanCode.decodeValues('0000 tu 1 i 1 o 1 . 1 q 1 f 1 \n 1 Qx 1   1 s 1 c 1 p 4 PV 1 IS 2 M 1 FE 2 CU 1 DA 2 e 1 rn 2 l 1 d 1 g, 1 a 1 m 1 v 1 b 1 h 1 N 1 jL'),
          AmauiHuffmanCode.decodeValues('14 '),
          AmauiHuffmanCode.decodeValues('1 4'),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { ' ': '0' },
          { a: '0' },
          {
            0: '111111100',
            1: '0111010',
            e: '000',
            o: '0010',
            n: '0011',
            u: '0100',
            d: '01010',
            c: '01011',
            r: '0110',
            g: '0111000',
            b: '0111001',
            v: '01110110',
            D: '01110111',
            h: '0111100',
            I: '01111010',
            C: '01111011',
            f: '0111110',
            P: '01111110',
            j: '01111111',
            i: '1000',
            t: '1001',
            s: '1010',
            l: '10110',
            m: '10111',
            ' ': '110',
            a: '1110',
            p: '111100',
            '.': '111101',
            ',': '111110',
            q: '1111110',
            L: '111111101',
            F: '111111110',
            S: '111111111'
          },
          {
            t: '0000',
            u: '0001',
            i: '0010',
            o: '00110',
            '.': '001110',
            q: '0011110',
            f: '00111110',
            '\n': '001111110',
            Q: '0011111110',
            x: '0011111111',
            ' ': '010',
            s: '0110',
            c: '01110',
            p: '011110',
            P: '011111000',
            V: '011111001',
            I: '011111010',
            S: '011111011',
            M: '011111100',
            F: '0111111010',
            E: '0111111011',
            C: '0111111100',
            U: '0111111101',
            D: '0111111110',
            A: '0111111111',
            e: '100',
            r: '1010',
            n: '1011',
            l: '1100',
            d: '11010',
            g: '110110',
            ',': '110111',
            a: '1110',
            m: '11110',
            v: '111110',
            b: '1111110',
            h: '11111110',
            N: '111111110',
            j: '1111111110',
            L: '1111111111'
          },
          {
            4: '0',
            ' ': '1'
          },
          {
            4: '1',
            ' ': '0'
          }
        ]));
      });

      to('getValues', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.getValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([])),
            window.AmauiHuffmanCode.getValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              ['a'],
            ])),
            window.AmauiHuffmanCode.getValues(new window.AmauiHuffmanCode.AmauiHuffmanTree().make([
              '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
            ])),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.getValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([])),
          AmauiHuffmanCode.getValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([
            ['a'],
          ])),
          AmauiHuffmanCode.getValues(new AmauiHuffmanCode.AmauiHuffmanTree().make([
            '0', '0', ['e'], '1', ['o', 'n'], '1', '0', ['u'], '1', ['d', 'c'], '1', ['r'], '1', '0', '0', ['g', 'b'], '1', ['1'], '1', ['v', 'D'], '1', '0', ['h'], '1', ['I', 'C'], '1', ['f'], '1', ['P', 'j'], '1', '0', '0', ['i', 't'], '1', ['s'], '1', ['l', 'm'], '1', [' '], '1', ['a'], '1', '0', ['p', '.'], '1', [','], '1', ['q'], '1', '0', ['0', 'L'], '1', ['F', 'S'],
          ])),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': '0' },
          {
            0: '111111100',
            1: '0111010',
            e: '000',
            o: '0010',
            n: '0011',
            u: '0100',
            d: '01010',
            c: '01011',
            r: '0110',
            g: '0111000',
            b: '0111001',
            v: '01110110',
            D: '01110111',
            h: '0111100',
            I: '01111010',
            C: '01111011',
            f: '0111110',
            P: '01111110',
            j: '01111111',
            i: '1000',
            t: '1001',
            s: '1010',
            l: '10110',
            m: '10111',
            ' ': '110',
            a: '1110',
            p: '111100',
            '.': '111101',
            ',': '111110',
            q: '1111110',
            L: '111111101',
            F: '111111110',
            S: '111111111'
          },
        ]));
      });

      to('decode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.decode('', {}).value,
            window.AmauiHuffmanCode.decode(4, {}).value,
            window.AmauiHuffmanCode.decode('AAIA', { ' ': '0' }).value,
            window.AmauiHuffmanCode.decode('EgAA', { ' ': '0' }).value,
            window.AmauiHuffmanCode.decode('AAIA', { a: '0' }).value,
            window.AmauiHuffmanCode.decode('AAL+kwAL506dfx1o8pL5RWJtUTuuJ+yyOgALkSjblR5FLgANxhaJ93+SljKKxNqF/s+5cWiorUFYN06ondcT9vHnMJbs5txqidyOEHu/4VoVvLcsN058LRX2v1hScrsySyXxxVvc9HktLQALFagrX5Gis+g4cpWv1hScrvc926q3eSDnTy4mNRLgq/JuVrRJN2km/IDneBssjRzHYyqW77eBtBrHklWeRcHwKvc9HIcAAbLRqSvsSoLQrMksl85txqifsY/IM7C0TutH5OviVBfbpzPCNaVhaJwqcYXg3T7n5ig8HAAKnq1+RorC0T9qid1xOuVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkv7ndIrLK9yUWdgYPpis/pUl9uXvCae0i1kreC1gAHIr8g1BXudyMAC8JxxUbkulcF', { 0: '111111100', 1: '0111010', e: '000', o: '0010', n: '0011', u: '0100', d: '01010', c: '01011', r: '0110', g: '0111000', b: '0111001', v: '01110110', D: '01110111', h: '0111100', I: '01111010', C: '01111011', f: '0111110', P: '01111110', j: '01111111', i: '1000', t: '1001', s: '1010', l: '10110', m: '10111', ' ': '110', a: '1110', p: '111100', '.': '111101', ',': '111110', q: '1111110', L: '111111101', F: '111111110', S: '111111111' }).value,
            window.AmauiHuffmanCode.decode('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', {
              t: '0000', u: '0001', i: '0010', o: '00110', '.': '001110', q: '0011110', f: '00111110', '\n': '001111110', Q: '0011111110', x: '0011111111', ' ': '010', s: '0110', c: '01110', p: '011110', P: '011111000', V: '011111001', I: '011111010', S: '011111011', M: '011111100', F: '0111111010', E: '0111111011', C: '0111111100', U: '0111111101', D: '0111111110', A: '0111111111', e: '100', r: '1010', n: '1011', l: '1100', d: '11010', g: '110110', ',': '110111', a: '1110', m: '11110', v: '111110', b: '1111110', h: '11111110', N: '111111110', j: '1111111110', L: '1111111111'
            }).value
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.decode('', {}).value,
          AmauiHuffmanCode.decode(4 as any, {}).value,
          AmauiHuffmanCode.decode('AAIA', { ' ': '0' }).value,
          AmauiHuffmanCode.decode('EgAA', { ' ': '0' }).value,
          AmauiHuffmanCode.decode('AAIA', { a: '0' }).value,
          AmauiHuffmanCode.decode('AAL+kwAL506dfx1o8pL5RWJtUTuuJ+yyOgALkSjblR5FLgANxhaJ93+SljKKxNqF/s+5cWiorUFYN06ondcT9vHnMJbs5txqidyOEHu/4VoVvLcsN058LRX2v1hScrsySyXxxVvc9HktLQALFagrX5Gis+g4cpWv1hScrvc926q3eSDnTy4mNRLgq/JuVrRJN2km/IDneBssjRzHYyqW77eBtBrHklWeRcHwKvc9HIcAAbLRqSvsSoLQrMksl85txqifsY/IM7C0TutH5OviVBfbpzPCNaVhaJwqcYXg3T7n5ig8HAAKnq1+RorC0T9qid1xOuVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkv7ndIrLK9yUWdgYPpis/pUl9uXvCae0i1kreC1gAHIr8g1BXudyMAC8JxxUbkulcF', { 0: '111111100', 1: '0111010', e: '000', o: '0010', n: '0011', u: '0100', d: '01010', c: '01011', r: '0110', g: '0111000', b: '0111001', v: '01110110', D: '01110111', h: '0111100', I: '01111010', C: '01111011', f: '0111110', P: '01111110', j: '01111111', i: '1000', t: '1001', s: '1010', l: '10110', m: '10111', ' ': '110', a: '1110', p: '111100', '.': '111101', ',': '111110', q: '1111110', L: '111111101', F: '111111110', S: '111111111' }).value,
          AmauiHuffmanCode.decode('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', {
            t: '0000', u: '0001', i: '0010', o: '00110', '.': '001110', q: '0011110', f: '00111110', '\n': '001111110', Q: '0011111110', x: '0011111111', ' ': '010', s: '0110', c: '01110', p: '011110', P: '011111000', V: '011111001', I: '011111010', S: '011111011', M: '011111100', F: '0111111010', E: '0111111011', C: '0111111100', U: '0111111101', D: '0111111110', A: '0111111111', e: '100', r: '1010', n: '1011', l: '1100', d: '11010', g: '110110', ',': '110111', a: '1110', m: '11110', v: '111110', b: '1111110', h: '11111110', N: '111111110', j: '1111111110', L: '1111111111'
          }).value
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          4,
          ' ',
          '  ',
          'a',
          'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.'
        ]));
      });

      to('encodeBase64', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.encodeBase64(''),
            window.AmauiHuffmanCode.encodeBase64('AAAA'),
            window.AmauiHuffmanCode.encodeBase64(`þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.encodeBase64(''),
          AmauiHuffmanCode.encodeBase64('AAAA'),
          AmauiHuffmanCode.encodeBase64(`þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          'AAAA',
          '/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA',
        ]));
      });

      to('decodeBase64', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            window.AmauiHuffmanCode.decodeBase64(''),
            window.AmauiHuffmanCode.decodeBase64('AAAA'),
            window.AmauiHuffmanCode.decodeBase64('/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA'),
          ];
        }, { browsers });
        const valueNode = [
          AmauiHuffmanCode.decodeBase64(''),
          AmauiHuffmanCode.decodeBase64('AAAA'),
          AmauiHuffmanCode.decodeBase64('/pMAC+dOnX8daPKS+UVibVE7rifssjogAAuRKNuVHkUuAA3GFon3f5KWMorE2oX+z7lxaKitQVg3Tqid1xP28ecwluzm3GqJ3I4Qe7/hWhW8tywgN04gfCAtFfa/WFJyuzJLICUg8cVb3PR5LS0ACxWoK1+RorPoOHKVr9YUnK73Pduqt3kg508uJiA1EuCr8m5WtEk3aSAmIPyA53gbLCCNHMdjICqW77eBtBrHklWeRcHwICr3PRyHAAGy0akr7EqC0KzJLCCXzm3GqJ+xj8gzsLRO60fk6+JUF9unM8I1pWFonCAqIHGF4N0gPiDn5ig8HAAKnq1+RorC0SA/IGqJ3XE6IOVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkgLyDud0issr3JRZ2Bg+mKz+lSX24gXiDwmnsgSLWSt4LWAAcnvyDUFe53IwALwnHFRuS6V1AA'),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '\x00\x00\x00',
          `þ\x93\x00\vçN\x9D\x7F\x1Dhò\x92ùEbmQ;®'ì²: \x00\v\x91(Û\x95\x1EE.\x00\rÆ\x16\x89÷\x7F\x92\x962\x8AÄÚ\x85þÏ¹qh¨­AX7N¨\x9D×\x13öñç0\x96ìæÜj\x89Ü\x8E\x10{¿áZ\x15¼·, 7N | -\x15ö¿XRr»2K % ñÅ[Üôy--\x00\v\x15¨+_\x91¢³è8r\x95¯Ö\x14\x9C®÷=Ûª·y çO.& 5\x12à«ònV´I7i & ü\x80çx\x1B, \x8D\x1CÇc *\x96ï·\x81´\x1AÇ\x92U\x9EEÁð *÷=\x1C\x87\x00\x01²Ñ©+ìJ\x82Ð¬É, \x97ÎmÆ¨\x9F±\x8FÈ3°´NëGäëâT\x17Û§3Â5¥ah\x9C * q\x85àÝ > çæ(<\x1C\x00\n\x9E­~F\x8AÂÑ ? j\x89Ýq: åaS\x00\x03\x1CTj\x17ð6é÷=·V\x83\x90ÊKëõWc\x00\v×+\x00\n\x98\x19\x92Y / îwH¬²½ÉE\x9D\x81\x83é\x8AÏéR_n ^ ð\x9A{ Hµ\x92·\x82Ö\x00\x07'¿ Ô\x15îw#\x00\vÂqÅFäºWP\x00`,
        ]));
      });

    });

    group('amauiHuffmanCode', () => {

      to('amauiHuffmanCode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').response.value,
            new window.AmauiHuffmanCode(4).response.value,
            new window.AmauiHuffmanCode(' ').response.value,
            new window.AmauiHuffmanCode('  ').response.value,
            new window.AmauiHuffmanCode('a').response.value,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').response.value,
            new window.AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').response.value,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').response.value,
          new AmauiHuffmanCode(4 as any).response.value,
          new AmauiHuffmanCode(' ').response.value,
          new AmauiHuffmanCode('  ').response.value,
          new AmauiHuffmanCode('a').response.value,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').response.value,
          new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').response.value,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIA',
          'EgAA',
          'AAIA',
          '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'
        ]));
      });

      to('encoded', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').encoded.value,
            new window.AmauiHuffmanCode(4 as any).encoded.value,
            new window.AmauiHuffmanCode(' ').encoded.value,
            new window.AmauiHuffmanCode('  ').encoded.value,
            new window.AmauiHuffmanCode('a').encoded.value,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').encoded.value,
            new window.AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').encoded.value
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').encoded.value,
          new AmauiHuffmanCode(4 as any).encoded.value,
          new AmauiHuffmanCode(' ').encoded.value,
          new AmauiHuffmanCode('  ').encoded.value,
          new AmauiHuffmanCode('a').encoded.value,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').encoded.value,
          new AmauiHuffmanCode('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt justo sit amet mi ornare volutpat. Praesent consequat mauris id massa vehicula, ac molestie dolor tincidunt. Fusce neque dolor, commodo nec justo nec, commodo euismod erat. Vivamus at tincidunt massa, nec tempor ante. In suscipit nisl nec faucibus gravida. In non commodo erat, eu luctus ligula. Sed purus justo, congue in congue eget, placerat scelerisque velit. Sed vel arcu risus. Vivamus auctor quis erat a porta.\n\nMauris vel dui at lectus tincidunt finibus id ut massa. Phasellus in velit elit. Etiam eu dapibus lorem. Maecenas at tincidunt urna. Cras vulputate lobortis urna quis condimentum. Ut sit amet sodales metus, eu eleifend arcu. In sed porta elit. Duis sit amet dictum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed commodo vitae magna eu consectetur. Vivamus faucibus vehicula dignissim. Aliquam vitae mauris lacinia, sodales ante eu, faucibus leo. Suspendisse vel sodales lacus. Aliquam erat volutpat.\n\nMaecenas molestie neque vel purus aliquam, vitae pharetra purus molestie. Fusce sit amet odio condimentum, bibendum velit scelerisque, placerat lorem. Aenean vestibulum lacus sit amet lectus sagittis consequat. Suspendisse est ante, dignissim eget lectus ac, dapibus ornare purus. Proin porta pharetra ipsum, eu eleifend erat consectetur pretium. Nullam sodales nisi non metus volutpat, luctus blandit tellus iaculis. Quisque eleifend erat orci, ac elementum nunc consectetur at. Vestibulum cursus aliquet fermentum. Ut fringilla ligula sed quam pharetra, sed congue metus euismod.\n\nQuisque vulputate in velit vel volutpat. Fusce sollicitudin sed risus et volutpat. Aliquam eget nisi vel risus tempor iaculis. In lobortis consectetur ipsum, sed consectetur mi eleifend a. Maecenas egestas erat quis gravida tristique. In hac habitasse platea dictumst. Cras sollicitudin non augue volutpat ultricies. Mauris finibus urna velit, a egestas tellus finibus ut. Nam a tortor et ligula vestibulum consectetur sit amet ac mi. Nulla consectetur diam vitae elit tristique fringilla. Duis eget magna mauris.\n\nInteger ut ipsum eu tortor mollis accumsan nec vitae ex. Proin convallis, eros et viverra fringilla, orci purus ultricies lectus, rutrum ultrices odio nibh non odio. Quisque imperdiet elit eu suscipit suscipit. Pellentesque suscipit ex sed mattis imperdiet. Vivamus egestas tristique nisl non ornare. Duis fringilla maximus venenatis. Proin porttitor eget quam sit amet volutpat. Nulla arcu purus, lacinia id volutpat ut, tincidunt sed purus. Donec ullamcorper id lacus in placerat. Pellentesque a tortor ut mauris egestas pulvinar. Mauris laoreet sem augue, eget auctor erat semper gravida. Nulla et lectus mi. Etiam sagittis libero at lobortis tincidunt. Suspendisse sem ligula, auctor eu lacinia id, pharetra sit amet lacus. Fusce quis arcu vestibulum, pulvinar neque ultricies, gravida justo.').encoded.value
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIA',
          'EgAA',
          'AAIA',
          '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'
        ]));
      });

      to('entropy', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').entropy,
            new window.AmauiHuffmanCode('a').entropy,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').entropy,
          new AmauiHuffmanCode('a').entropy,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          4.18,
        ]));
      });

      to('entropy', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').entropy,
            new window.AmauiHuffmanCode('a').entropy,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').entropy,
          new AmauiHuffmanCode('a').entropy,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').entropy,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          4.18,
        ]));
      });

      to('averageCodeWordLength', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').averageCodeWordLength,
            new window.AmauiHuffmanCode('a').averageCodeWordLength,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').averageCodeWordLength,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').averageCodeWordLength,
          new AmauiHuffmanCode('a').averageCodeWordLength,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').averageCodeWordLength,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          1,
          4.215,
        ]));
      });

      to('redundency', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').redundency,
            new window.AmauiHuffmanCode('a').redundency,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').redundency,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').redundency,
          new AmauiHuffmanCode('a').redundency,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').redundency,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          1,
          0.035,
        ]));
      });

      to('efficiency', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').efficiency,
            new window.AmauiHuffmanCode('a').efficiency,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').efficiency,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').efficiency,
          new AmauiHuffmanCode('a').efficiency,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').efficiency,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          0,
          0,
          0.992,
        ]));
      });

      to('encode', async () => {
        let amauiHuffmanCodes = [
          new AmauiHuffmanCode(''),
          new AmauiHuffmanCode(4 as any),
          new AmauiHuffmanCode(' '),
          new AmauiHuffmanCode('  '),
          new AmauiHuffmanCode('a'),
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.'),
        ];

        amauiHuffmanCodes = amauiHuffmanCodes.map(item => {
          item.getProbabilities();
          item.normalizeProbabilities();
          item.makeHuffmanTree();
          item.values = AmauiHuffmanCode.getValues(item.huffmanTree);

          item.encode();

          return item.response.value;
        });

        const valueBrowsers = await evaluate((window: any) => {
          let amauiHuffmanCodes = [
            new window.AmauiHuffmanCode(''),
            new window.AmauiHuffmanCode(4),
            new window.AmauiHuffmanCode(' '),
            new window.AmauiHuffmanCode('  '),
            new window.AmauiHuffmanCode('a'),
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.'),
          ];

          amauiHuffmanCodes = amauiHuffmanCodes.map(item => {
            item.getProbabilities();
            item.normalizeProbabilities();
            item.makeHuffmanTree();
            item.values = window.AmauiHuffmanCode.getValues(item.huffmanTree);

            item.encode();

            return item.response.value;
          });

          return amauiHuffmanCodes;
        }, { browsers });
        const valueNode = amauiHuffmanCodes;
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          '',
          'AAIA',
          'EgAA',
          'AAIA',
          'AAL+kwAL506dfx1o8pL5RWJtUTuuJ+yyOgALkSjblR5FLgANxhaJ93+SljKKxNqF/s+5cWiorUFYN06ondcT9vHnMJbs5txqidyOEHu/4VoVvLcsN058LRX2v1hScrsySyXxxVvc9HktLQALFagrX5Gis+g4cpWv1hScrvc926q3eSDnTy4mNRLgq/JuVrRJN2km/IDneBssjRzHYyqW77eBtBrHklWeRcHwKvc9HIcAAbLRqSvsSoLQrMksl85txqifsY/IM7C0TutH5OviVBfbpzPCNaVhaJwqcYXg3T7n5ig8HAAKnq1+RorC0T9qid1xOuVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkv7ndIrLK9yUWdgYPpis/pUl9uXvCae0i1kreC1gAHIr8g1BXudyMAC8JxxUbkulcF',
        ]));
      });

      to('decode', async () => {
        const valueBrowsers = await evaluate((window: any) => {
          return [
            new window.AmauiHuffmanCode('').decode('').value,
            new window.AmauiHuffmanCode(4).decode(4).value,
            new window.AmauiHuffmanCode(' ').decode('AAIA').value,
            new window.AmauiHuffmanCode('  ').decode('EgAA').value,
            new window.AmauiHuffmanCode('a').decode('AAIA').value,
            new window.AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').decode('AAL+kwAL506dfx1o8pL5RWJtUTuuJ+yyOgALkSjblR5FLgANxhaJ93+SljKKxNqF/s+5cWiorUFYN06ondcT9vHnMJbs5txqidyOEHu/4VoVvLcsN058LRX2v1hScrsySyXxxVvc9HktLQALFagrX5Gis+g4cpWv1hScrvc926q3eSDnTy4mNRLgq/JuVrRJN2km/IDneBssjRzHYyqW77eBtBrHklWeRcHwKvc9HIcAAbLRqSvsSoLQrMksl85txqifsY/IM7C0TutH5OviVBfbpzPCNaVhaJwqcYXg3T7n5ig8HAAKnq1+RorC0T9qid1xOuVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkv7ndIrLK9yUWdgYPpis/pUl9uXvCae0i1kreC1gAHIr8g1BXudyMAC8JxxUbkulcF').value,
          ];
        }, { browsers });
        const valueNode = [
          new AmauiHuffmanCode('').decode('').value,
          new AmauiHuffmanCode(4 as any).decode(4 as any).value,
          new AmauiHuffmanCode(' ').decode('AAIA').value,
          new AmauiHuffmanCode('  ').decode('EgAA').value,
          new AmauiHuffmanCode('a').decode('AAIA').value,
          new AmauiHuffmanCode('Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.').decode('AAL+kwAL506dfx1o8pL5RWJtUTuuJ+yyOgALkSjblR5FLgANxhaJ93+SljKKxNqF/s+5cWiorUFYN06ondcT9vHnMJbs5txqidyOEHu/4VoVvLcsN058LRX2v1hScrsySyXxxVvc9HktLQALFagrX5Gis+g4cpWv1hScrvc926q3eSDnTy4mNRLgq/JuVrRJN2km/IDneBssjRzHYyqW77eBtBrHklWeRcHwKvc9HIcAAbLRqSvsSoLQrMksl85txqifsY/IM7C0TutH5OviVBfbpzPCNaVhaJwqcYXg3T7n5ig8HAAKnq1+RorC0T9qid1xOuVhUwADHFRqF/A26fc9t1aDkMpL6/VXYwAL1ysACpgZklkv7ndIrLK9yUWdgYPpis/pUl9uXvCae0i1kreC1gAHIr8g1BXudyMAC8JxxUbkulcF').value,
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          '',
          4,
          ' ',
          '  ',
          'a',
          'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.',
        ]));
      });

      to('getProbabilities', async () => {
        const amauiHuffmanCodes = [
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
        ];

        amauiHuffmanCodes[0].value = '';
        amauiHuffmanCodes[1].value = 'a';
        amauiHuffmanCodes[2].value = 'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';

        const valueBrowsers = await evaluate((window: any) => {
          const amauiHuffmanCodes = [
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
          ];

          amauiHuffmanCodes[0].value = '';
          amauiHuffmanCodes[1].value = 'a';
          amauiHuffmanCodes[2].value = 'Lorem 11101 ipsum dolor sit amet, consectetur adipiscing elit. Fusce dolor sem, facilisis sed erat sit amet, pharetra blandit augue. Sed id placerat felis, malesuada rutrum nisl. In ultrices sed mauris finibus malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer cursus, odio id rutrum blandit, neque velit aliquam odio, at rhoncus elit est nec erat. Proin egestas mauris elit, sit amet molestie nisi semper at. Cras interdum massa nec molestie rutrum. Duis commodo venenatis justo, ac porta tellus pellentesque sed. Donec et nisi aumus.';

          return [
            amauiHuffmanCodes[0].getProbabilities(),
            amauiHuffmanCodes[1].getProbabilities(),
            amauiHuffmanCodes[2].getProbabilities(),
          ];
        }, { browsers });

        const valueNode = [
          amauiHuffmanCodes[0].getProbabilities(),
          amauiHuffmanCodes[1].getProbabilities(),
          amauiHuffmanCodes[2].getProbabilities(),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': 1 },
          { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 },
        ]));
      });

      to('normalizeProbabilities', async () => {
        const amauiHuffmanCodes = [
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
        ];

        amauiHuffmanCodes[0].probabilities = {};
        amauiHuffmanCodes[1].probabilities = { 'a': 1 };
        amauiHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

        const valueBrowsers = await evaluate((window: any) => {
          const amauiHuffmanCodes = [
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
          ];

          amauiHuffmanCodes[0].probabilities = {};
          amauiHuffmanCodes[1].probabilities = { 'a': 1 };
          amauiHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

          return [
            amauiHuffmanCodes[0].normalizeProbabilities(),
            amauiHuffmanCodes[1].normalizeProbabilities(),
            amauiHuffmanCodes[2].normalizeProbabilities(),
          ];
        }, { browsers });

        const valueNode = [
          amauiHuffmanCodes[0].normalizeProbabilities(),
          amauiHuffmanCodes[1].normalizeProbabilities(),
          amauiHuffmanCodes[2].normalizeProbabilities(),
        ];
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          {},
          { 'a': 1 },
          { '0': 0.0017, '1': 0.0067, 'L': 0.0017, 'o': 0.0471, 'r': 0.0521, 'e': 0.0958, 'm': 0.0387, ' ': 0.1513, 'i': 0.0756, 'p': 0.0185, 's': 0.0807, 'u': 0.0538, 'd': 0.0303, 'l': 0.0403, 't': 0.0756, 'a': 0.0706, ',': 0.0168, 'c': 0.0303, 'n': 0.0437, 'g': 0.0067, '.': 0.0168, 'F': 0.0017, 'f': 0.005, 'h': 0.005, 'b': 0.0067, 'S': 0.0017, 'I': 0.0034, 'C': 0.0034, 'q': 0.0084, 'v': 0.0034, 'P': 0.0017, 'D': 0.0034, 'j': 0.0017 }
        ]));
      });

      to('makeHuffmanTree', async () => {
        const amauiHuffmanCodes = [
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
          new AmauiHuffmanCode(),
        ];

        amauiHuffmanCodes[0].probabilities = {};
        amauiHuffmanCodes[1].probabilities = { 'a': 1 };
        amauiHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

        const valueBrowsers = await evaluate((window: any) => {
          const amauiHuffmanCodes = [
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
            new window.AmauiHuffmanCode(),
          ];

          amauiHuffmanCodes[0].probabilities = {};
          amauiHuffmanCodes[1].probabilities = { 'a': 1 };
          amauiHuffmanCodes[2].probabilities = { '0': 1, '1': 4, 'L': 1, 'o': 28, 'r': 31, 'e': 57, 'm': 23, ' ': 90, 'i': 45, 'p': 11, 's': 48, 'u': 32, 'd': 18, 'l': 24, 't': 45, 'a': 42, ',': 10, 'c': 18, 'n': 26, 'g': 4, '.': 10, 'F': 1, 'f': 3, 'h': 3, 'b': 4, 'S': 1, 'I': 2, 'C': 2, 'q': 5, 'v': 2, 'P': 1, 'D': 2, 'j': 1 };

          return [
            amauiHuffmanCodes[0].makeHuffmanTree().array,
            amauiHuffmanCodes[1].makeHuffmanTree().array,
            amauiHuffmanCodes[2].makeHuffmanTree().array,
          ]
            .map(item => item.filter(Boolean));
        }, { browsers });

        const valueNode = [
          amauiHuffmanCodes[0].makeHuffmanTree().array,
          amauiHuffmanCodes[1].makeHuffmanTree().array,
          amauiHuffmanCodes[2].makeHuffmanTree().array,
        ]
          .map(item => item.filter(Boolean));
        const values = [valueNode, ...valueBrowsers];

        values.forEach(value => assert(value).eql([
          [],
          ['a'],
          ['e', 'o', 'n', 'u', 'd', 'c', 'r', 'g', 'b', 'I', 'C', 'v', 'D', '1', 'h', 'f', 'P', 'j', 'i', 't', 's', 'l', 'm', ' ', 'a', 'p', '.', ',', 'q', '0', 'L', 'F', 'S'],
        ]));
      });

    });

  });

});
