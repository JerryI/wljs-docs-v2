---
title: ContinuousAction
---

`ContinuousAction` is an option for `Manipulate`, `Slider`, and related functions that specifies whether action should be taken continuously while controls are being moved.

## Examples

Disable continuous updates:

```wolfram
Manipulate[x^2, {x, 0, 10}, ContinuousAction -> False]
```

Enable continuous updates (default):

```wolfram
Manipulate[Plot[Sin[a x], {x, 0, 2 Pi}], {a, 1, 5}, ContinuousAction -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousAction.html) for more details.*