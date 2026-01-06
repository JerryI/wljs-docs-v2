---
title: NHoldFirst
---

`NHoldFirst` is an attribute which specifies that the first argument to a function should not be affected by `N`.

## Examples

```wolfram
SetAttributes[f, NHoldFirst]
N[f[Pi, E]]
```

```wolfram
Attributes[f]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NHoldFirst.html) for more details.*