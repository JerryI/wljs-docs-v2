---
title: AllowedFrequencyRange
---

`AllowedFrequencyRange` is an option for audio and signal processing functions that specifies the range of frequencies of interest.

## Examples

Specify a frequency range for audio processing:

```wolfram
AudioSpectralMap[# &, audio, AllowedFrequencyRange -> {100, 5000}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AllowedFrequencyRange.html) for more details.*