---
title: AudioAnnotate
---

`AudioAnnotate[audio, prop]` computes the property prop and adds it as an annotation to audio.

`AudioAnnotate[audio, name -> spec]` adds an annotation with the specified name and values spec to audio.

## Examples

Annotate audio with loudness:

```wolfram
AudioAnnotate[audio, "Loudness"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AudioAnnotate.html) for more details.*