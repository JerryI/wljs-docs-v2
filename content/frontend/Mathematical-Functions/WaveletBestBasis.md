---
title: WaveletBestBasis
---

`WaveletBestBasis[dwd]` computes a best basis representation in the `DiscreteWaveletData` object dwd.

- `WaveletBestBasis[dwd, cspec]` computes a best basis representation using the cost specification cspec.

## Examples

```wolfram
dwd = DiscreteWaveletPacketTransform[{1, 2, 3, 4, 5, 6, 7, 8}];
WaveletBestBasis[dwd]
```

```wolfram
WaveletBestBasis[dwd, "Entropy"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletBestBasis.html) for more details.*