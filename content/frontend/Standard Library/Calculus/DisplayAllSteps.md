---
title: DisplayAllSteps
---

`DisplayAllSteps` is an option to `Animate` and related functions that specifies whether all frames should be displayed in an animation, even if to do so would slow the animation down.

## Examples

Animate with all steps displayed:

```wolfram
Animate[Plot[Sin[x + t], {x, 0, 2Pi}], {t, 0, 2Pi}, DisplayAllSteps -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DisplayAllSteps.html) for more details.*