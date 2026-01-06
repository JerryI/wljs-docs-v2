---
title: RemoveAudioStream
---

`RemoveAudioStream[]` deletes all AudioStream objects.

- `RemoveAudioStream[stream]` deletes the AudioStream object stream.
- `RemoveAudioStream[audio]` deletes all the AudioStream objects stemming from audio.

## Examples

```wolfram
stream = AudioStream[ExampleData[{"Audio", "Trumpet"}]];
RemoveAudioStream[stream]
```

```wolfram
RemoveAudioStream[]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoveAudioStream.html) for more details.*