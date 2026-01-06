---
title: ShortTimeFourier
---

`ShortTimeFourier[data]` returns the short-time Fourier transform (STFT) of data as a ShortTimeFourierData object.

`ShortTimeFourier[data,n]` uses partitions of length n.

`ShortTimeFourier[data,n,d]` uses partitions with offset d.

`ShortTimeFourier[data,n,d,wfun]` applies a smoothing window wfun to each partition.

`ShortTimeFourier[data,n,d,wfun,m]` pads partitions with zeros to length m prior to the computation of the transform.

## Examples

Compute the short-time Fourier transform:

```wolfram
data = Table[Sin[n/10] + Sin[n/20], {n, 1000}];
stft = ShortTimeFourier[data]
(* ShortTimeFourierData[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShortTimeFourier.html) for more details.*