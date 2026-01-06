---
title: AudioReverb
---

`AudioReverb[audio]` adds reverberation to audio.

`AudioReverb[audio, model]` adds reverberation following the room model.

`AudioReverb[audio, model, mix]` controls the mix ratio between original and reverberated audio.

## Examples

Add reverb effect:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioReverb[audio, "LargeHall"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioReverb.html) for more details.*