---
title: Periodogram
---

`Periodogram[list]` plots the squared magnitude of the discrete Fourier transform (power spectrum) of list.

- `Periodogram[list, n]` plots the mean of power spectra of non-overlapping partitions of length n.
- `Periodogram[list, n, d]` uses partitions with offset d.
- `Periodogram[list, n, d, wfun]` applies a smoothing window wfun to each partition.
- `Periodogram[list, n, d, wfun, m]` pads partitions with zeros to length m prior to the computation of the transform.
- `Periodogram[{list1, list2, ...}, n, d, wfun, m]` plots power spectra of several lists.
- `Periodogram[audio, ...]` plots the power spectrum of audio.
- `Periodogram[video, ...]` plots the power spectrum of the first audio track in video.
- `Periodogram[{input1, input2, ...}, ...]` plots the power spectra of all inputi.

## Examples

```wolfram
Periodogram[Table[Sin[2 Pi 0.1 n], {n, 100}]]
```

```wolfram
Periodogram[RandomReal[1, 256], 64]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Periodogram.html) for more details.