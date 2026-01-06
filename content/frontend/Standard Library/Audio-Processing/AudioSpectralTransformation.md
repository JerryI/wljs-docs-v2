---
title: AudioSpectralTransformation
---

`AudioSpectralTransformation[f, audio]` returns a modified version of audio by applying a time-frequency transformation f to its short-time Fourier transform.

`AudioSpectralTransformation[f, video]` transforms the first audio track in video.

## Examples

Apply spectral transformation:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioSpectralTransformation[# &, audio]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioSpectralTransformation.html) for more details.*