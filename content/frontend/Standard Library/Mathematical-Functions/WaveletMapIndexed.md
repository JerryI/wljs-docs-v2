# WaveletMapIndexed

`WaveletMapIndexed[f, wd]` applies the function f to the arrays of coefficients and indices of a `ContinuousWaveletData` or `DiscreteWaveletData` object.

- `WaveletMapIndexed[f, dwd, wind]` applies f to the `DiscreteWaveletData` coefficients specified by wind.
- `WaveletMapIndexed[f, cwd, octvoc]` applies f to the `ContinuousWaveletData` coefficients specified by octvoc.

## Examples

```wolfram
dwd = DiscreteWaveletTransform[{1, 2, 3, 4, 5, 6, 7, 8}];
WaveletMapIndexed[Abs, dwd]
```

```wolfram
WaveletMapIndexed[# * 2 &, dwd, {1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletMapIndexed.html) for more details.*