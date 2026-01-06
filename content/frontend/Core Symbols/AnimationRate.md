# AnimationRate

`AnimationRate` is an option for `Animate` and `Animator` that specifies at what rate an animation should run, in units per second.

## Examples

Create an animation with a specific rate:

```wolfram
Animate[Plot[Sin[x + t], {x, 0, 2 Pi}], {t, 0, 2 Pi}, AnimationRate -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnimationRate.html) for more details.*