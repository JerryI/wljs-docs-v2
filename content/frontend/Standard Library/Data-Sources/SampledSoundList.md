# SampledSoundList

`SampledSoundList[{a1, a2, ...}, r]` is a sound primitive that represents a sound whose amplitude has levels ai sampled r times a second.

## Examples

Create a simple tone:

```wolfram
SampledSoundList[Table[Sin[2 Pi 440 t], {t, 0, 1, 1/8000}], 8000]
```

Generate a sound from data:

```wolfram
SampledSoundList[RandomReal[{-1, 1}, 44100], 44100]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SampledSoundList.html) for more details.*