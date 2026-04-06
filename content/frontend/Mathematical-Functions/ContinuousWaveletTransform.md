---
title: ContinuousWaveletTransform
---

`ContinuousWaveletTransform[{x1, x2, ...}]` gives the continuous wavelet transform of a list of values xi.

`ContinuousWaveletTransform[data, wave]` gives the continuous wavelet transform using the wavelet wave.

`ContinuousWaveletTransform[data, wave, {noct, nvoc}]` gives the continuous wavelet transform using noct octaves with nvoc voices per octave.

`ContinuousWaveletTransform[sound, ...]` gives the continuous wavelet transform of sampled sound.

## Examples

Transform a signal:

```wolfram
signal = Table[Sin[2 Pi t] + Sin[4 Pi t], {t, 0, 10, 0.01}];
cwt = ContinuousWaveletTransform[signal];
WaveletScalogram[cwt]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousWaveletTransform.html) for more details.