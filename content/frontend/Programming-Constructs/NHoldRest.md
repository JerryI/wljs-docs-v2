---
title: NHoldRest
---

`NHoldRest` is an attribute which specifies that all but the first argument to a function should not be affected by `N`.

This attribute prevents numerical evaluation of arguments other than the first when `N` is applied.

## Examples

```wolfram
SetAttributes[f, NHoldRest];
N[f[1/3, 1/7]]
```

```wolfram
Attributes[Plot]
```

```wolfram
(* Compare with and without NHoldRest *)
ClearAttributes[g, NHoldRest];
N[g[1/2, 1/3]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NHoldRest.html) for more details.*