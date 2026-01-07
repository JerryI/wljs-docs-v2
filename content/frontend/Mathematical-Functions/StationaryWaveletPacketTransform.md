---
title: StationaryWaveletPacketTransform
---

`StationaryWaveletPacketTransform[data]` gives the stationary wavelet packet transform (SWPT) of an array of data.

`StationaryWaveletPacketTransform[data,wave]` gives the stationary wavelet packet transform using the wavelet wave.

`StationaryWaveletPacketTransform[data,wave,r]` gives the stationary wavelet packet transform using r levels of refinement.

## Examples

Compute the stationary wavelet packet transform:

```wolfram
data = Table[Sin[x], {x, 0, 2 Pi, 0.1}];
StationaryWaveletPacketTransform[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StationaryWaveletPacketTransform.html) for more details.*