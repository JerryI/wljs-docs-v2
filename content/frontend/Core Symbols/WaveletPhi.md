# WaveletPhi

`WaveletPhi[wave, x]` gives the scaling function ϕ(x) for the symbolic wavelet wave evaluated at x.

- `WaveletPhi[wave]` gives the scaling function as a pure function.

## Examples

```wolfram
WaveletPhi[HaarWavelet[], x]
```

```wolfram
Plot[WaveletPhi[DaubechiesWavelet[4], x], {x, 0, 7}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletPhi.html) for more details.*