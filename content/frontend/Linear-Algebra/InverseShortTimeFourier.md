---
title: InverseShortTimeFourier
---

`InverseShortTimeFourier[input]` reconstructs the signal from short-time Fourier data.

- `InverseShortTimeFourier[input, n]` assumes the spectrogram data was computed with partitions of length n.
- `InverseShortTimeFourier[input, n, d]` assumes partitions with offset d.
- `InverseShortTimeFourier[input, n, d, wfun]` assumes a smoothing window wfun was applied to each partition.

## Examples

Reconstruct signal from STFT:

```wolfram
signal = Table[Sin[2 Pi 440 t], {t, 0, 1, 1/8000}];
stft = ShortTimeFourier[signal];
InverseShortTimeFourier[stft]
```

With partition length:

```wolfram
InverseShortTimeFourier[stft, 256]
```

With offset and window:

```wolfram
InverseShortTimeFourier[stft, 256, 64, HannWindow]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseShortTimeFourier.html) for more details.