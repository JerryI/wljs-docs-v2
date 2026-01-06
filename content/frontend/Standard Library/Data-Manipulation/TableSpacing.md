# TableSpacing

`TableSpacing` is an option for `TableForm` and `MatrixForm` that specifies how many spaces should be left between each successive row or column.

## Examples

Default table spacing:

```wolfram
TableForm[{{1, 2, 3}, {4, 5, 6}}]
```

Custom spacing between rows and columns:

```wolfram
TableForm[{{1, 2, 3}, {4, 5, 6}}, TableSpacing -> {2, 3}]
```

Increase column spacing:

```wolfram
TableForm[{{a, b}, {c, d}}, TableSpacing -> {1, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TableSpacing.html) for more details.*