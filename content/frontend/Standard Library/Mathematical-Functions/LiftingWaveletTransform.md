# LiftingWaveletTransform

`LiftingWaveletTransform[data]` gives the lifting wavelet transform (LWT) of an array of data.

- `LiftingWaveletTransform[data, wave]` gives the lifting wavelet transform using the wavelet wave.
- `LiftingWaveletTransform[data, wave, r]` gives the lifting wavelet transform using r levels of refinement.

## Examples

```wolfram
data = Table[Sin[x], {x, 0, 2 Pi, 0.1}];
LiftingWaveletTransform[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LiftingWaveletTransform.html) for more details.*