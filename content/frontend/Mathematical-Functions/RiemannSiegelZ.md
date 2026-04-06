---
title: RiemannSiegelZ
---

`RiemannSiegelZ[t]` gives the Riemann–Siegel function Z(t).

## Examples

Evaluate at a point:

```wolfram
RiemannSiegelZ[10]
```

Plot the function:

```wolfram
Plot[RiemannSiegelZ[t], {t, 0, 50}]
```

Find zeros (related to zeta zeros):

```wolfram
Table[RiemannSiegelZ[t], {t, 14, 15, 0.1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RiemannSiegelZ.html) for more details.