# GaborFilter

`GaborFilter[data, r, k]` filters data by convolving with a Gabor kernel of pixel radius r and wave vector k.

- `GaborFilter[data, r, k, ϕ]` uses a Gabor kernel with phase shift ϕ.
- `GaborFilter[data, {r, σ}, ...]` uses a Gabor kernel with radius r and standard deviation σ.

## Examples

Apply a Gabor filter to an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
GaborFilter[img, 10, {1, 0}]
```

Filter with a phase shift:

```wolfram
GaborFilter[img, 10, {0, 1}, Pi/4]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaborFilter.html) for more details.*