# BlockDiagonalMatrix

`BlockDiagonalMatrix[{d1, d2, ...}]` represents the block diagonal matrix with diagonal blocks di as a structured array.

`BlockDiagonalMatrix[mat]` converts the block diagonal matrix mat to a structured array.

## Examples

Create a block diagonal matrix:

```wolfram
BlockDiagonalMatrix[{{{1, 2}, {3, 4}}, {{5, 6}, {7, 8}}}]
```

View as normal matrix:

```wolfram
Normal[BlockDiagonalMatrix[{{{1, 0}, {0, 1}}, {{2}}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BlockDiagonalMatrix.html) for more details.*