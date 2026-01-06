# GradientFilter

`GradientFilter[data, r]` gives the magnitude of the gradient of `data`, computed using discrete derivatives of a Gaussian of sample radius `r`.

- `GradientFilter[data, {r, σ}]` uses a Gaussian with standard deviation `σ`.
- `GradientFilter[data, {{r1, r2, …}, …}]` uses a Gaussian with radius `ri` at level `i` in `data`.

## Examples

```wolfram
GradientFilter[ExampleData[{"TestImage", "Lena"}], 2]
```

```wolfram
GradientFilter[image, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GradientFilter.html) for more details.*