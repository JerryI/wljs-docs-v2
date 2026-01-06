# ShortTimeFourierData

`ShortTimeFourierData[assoc]` represents the result and properties of a short-time Fourier transform (STFT) of a signal.

## Examples

```wolfram
stft = ShortTimeFourier[Table[Sin[2 Pi t 440], {t, 0, 1, 1/8000}]];
stft["Spectrogram"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ShortTimeFourierData.html) for more details.*