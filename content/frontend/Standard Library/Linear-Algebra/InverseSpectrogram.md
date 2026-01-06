# InverseSpectrogram

`InverseSpectrogram[data]` reconstructs the signal from the magnitude spectrogram data.

- `InverseSpectrogram[img]` reconstructs the signal, assuming that the image img is the magnitude spectrogram.
- `InverseSpectrogram[input, n]` assumes the spectrogram data was computed with partitions of length n.
- `InverseSpectrogram[input, n, d]` assumes partitions with offset d.
- `InverseSpectrogram[input, n, d, wfun]` assumes a smoothing window wfun was applied to each partition.

## Examples

```wolfram
audio = ExampleData[{"Audio", "Apollo11SmallStep"}];
spec = Spectrogram[audio];
InverseSpectrogram[spec]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseSpectrogram.html) for more details.*