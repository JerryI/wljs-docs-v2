---
title: ControlActive
---

`ControlActive[act, norm]` evaluates to act if a control that affects act is actively being used, and to norm otherwise.

## Examples

Show different content during control interaction:

```wolfram
Manipulate[ControlActive["Moving", Plot[Sin[a x], {x, 0, 2 Pi}]], {a, 1, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ControlActive.html) for more details.*