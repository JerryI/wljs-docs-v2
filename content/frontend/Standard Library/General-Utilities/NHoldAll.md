---
title: NHoldAll
---

`NHoldAll` is an attribute which specifies that none of the arguments to a function should be affected by `N`.

## Examples

```wolfram
SetAttributes[f, NHoldAll];
N[f[Pi]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NHoldAll.html) for more details.*