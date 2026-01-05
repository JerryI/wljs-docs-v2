# WaveletListPlot

`WaveletListPlot[dwd]` plots wavelet transform coefficients in the DiscreteWaveletData dwd.

`WaveletListPlot[dwd,wind]` plots wavelet transform coefficients corresponding to the wavelet index specification wind.

`WaveletListPlot[dwd,wind,func]` applies func to coefficients before plotting.

`WaveletListPlot[{dwd1,dwd2,…},…]` plots wavelet transform coefficients from several DiscreteWaveletData objects dwd1, dwd2, ….

## Examples

Plot wavelet coefficients:

```wolfram
dwd = DiscreteWaveletTransform[Table[Sin[n], {n, 128}]];
WaveletListPlot[dwd]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletListPlot.html) for more details.*