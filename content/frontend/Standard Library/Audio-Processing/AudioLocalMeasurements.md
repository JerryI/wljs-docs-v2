---
title: AudioLocalMeasurements
---

`AudioLocalMeasurements[audio, "prop"]` computes the property "prop" locally for partitions of audio.

`AudioLocalMeasurements[audio, {prop1, prop2, ...}]` computes several properties.

`AudioLocalMeasurements[audio, "prop", format]` returns the measurements in the specified output format.

## Examples

Compute local RMS amplitude:

```wolfram
audio = ExampleData[{"Audio", "Bird"}];
AudioLocalMeasurements[audio, "RMSAmplitude"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioLocalMeasurements.html) for more details.*