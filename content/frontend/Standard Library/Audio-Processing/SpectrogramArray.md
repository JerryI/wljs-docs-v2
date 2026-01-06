# SpectrogramArray

`SpectrogramArray[list]` returns the spectrogram data of list.

- `SpectrogramArray[list, n]` uses partitions of length n.
- `SpectrogramArray[list, n, d]` uses partitions with offset d.
- `SpectrogramArray[list, n, d, wfun]` applies a smoothing window wfun to each partition.
- `SpectrogramArray[list, n, d, wfun, m]` pads partitions with zeros to length m prior to the computation of the transform.
- `SpectrogramArray[audio, ...]` returns spectrogram data of audio.
- `SpectrogramArray[video]` returns the spectrogram data of the first audio track in video.

## Examples

Get spectrogram data from a signal:

```wolfram
data = Table[Sin[100 t] + Sin[200 t], {t, 0, 1, 0.001}];
SpectrogramArray[data]
```

With specified partition length:

```wolfram
SpectrogramArray[data, 128]
```

Apply a Hamming window:

```wolfram
SpectrogramArray[data, 256, 64, HammingWindow]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpectrogramArray.html) for more details.*