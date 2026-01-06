---
title: AnimationRepetitions
---

`AnimationRepetitions` is an option to `Animate` and related functions that specifies how many times the animation they create runs before stopping.

## Examples

Create an animation that repeats 3 times:

```wolfram
Animate[Graphics[Disk[{t, 0}]], {t, 0, 1}, AnimationRepetitions -> 3]
```

Run animation infinitely:

```wolfram
Animate[expr, {t, 0, 1}, AnimationRepetitions -> Infinity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnimationRepetitions.html) for more details.*