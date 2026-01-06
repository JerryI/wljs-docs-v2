# StructuredArray

`StructuredArray[st, {d1, d2, ...}, data]` represents a d1×d2×… array with structure type st and specific content data.

Structured arrays efficiently store arrays with special structure (symmetric, antisymmetric, etc.).

## Examples

```wolfram
StructuredArray[SymmetricMatrix, {3, 3}, {1, 2, 3, 4, 5, 6}]
```

```wolfram
StructuredArray[DiagonalMatrix, {3, 3}, {1, 2, 3}]
```

```wolfram
Normal[StructuredArray[SymmetricMatrix, {2, 2}, {a, b, c}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StructuredArray.html) for more details.*