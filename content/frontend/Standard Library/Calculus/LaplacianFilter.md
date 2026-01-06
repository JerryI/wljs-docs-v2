# LaplacianFilter

`LaplacianFilter[data, r]` convolves data with a radius-r Laplacian kernel.

- `LaplacianFilter[data, {r1, r2, ...}]` uses radius ri at level i in data.

## Examples

```wolfram
LaplacianFilter[ExampleData[{"TestImage", "Lena"}], 2]
```

```wolfram
LaplacianFilter[{1, 2, 5, 2, 1}, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LaplacianFilter.html) for more details.*