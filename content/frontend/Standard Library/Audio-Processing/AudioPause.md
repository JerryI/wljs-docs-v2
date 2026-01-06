---
title: AudioPause
---

`AudioPause[]` pauses the playback of all AudioStream objects.

`AudioPause[astream]` pauses the playback of the AudioStream object astream.

`AudioPause[audio]` pauses the playback for all streams originated by audio.

## Examples

Pause playback:

```wolfram
stream = AudioPlay[ExampleData[{"Audio", "Bird"}]];
AudioPause[stream]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioPause.html) for more details.*