---
title: AudioChannelCombine
---

`AudioChannelCombine[{audio1, audio2, ...}]` creates a multichannel audio object by combining the sequence of channels in audioi.

## Examples

Combine mono audio into stereo:

```wolfram
mono = ExampleData[{"Audio", "Bird"}];
stereo = AudioChannelCombine[{mono, mono}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioChannelCombine.html) for more details.*