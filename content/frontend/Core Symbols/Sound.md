# Sound

`Sound[primitives]` represents a sound.

`Sound[primitives, t]` specifies that the sound should have duration t.

`Sound[primitives, {tmin, tmax}]` specifies that the sound should extend from time tmin to time tmax.

## Examples

Create a simple sound from a sine wave:

```wolfram
Sound[SoundNote["C"]]
```

Create a sound with specified duration:

```wolfram
Sound[Play[Sin[440 2 Pi t], {t, 0, 1}], 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sound.html) for more details.*