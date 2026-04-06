---
title: SeriesData
---

`SeriesData[x, x0, {a0, a1, ...}, nmin, nmax, den]` represents a power series in the variable x about the point x0. The ai are the coefficients in the power series.

## Examples

Construct a series manually:

```wolfram
SeriesData[x, 0, {1, 1, 1/2, 1/6}, 0, 4, 1]
(* 1 + x + x^2/2 + x^3/6 + O[x]^4 *)
```

Extract series data:

```wolfram
s = Series[Sin[x], {x, 0, 3}];
SeriesData[s]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SeriesData.html) for more details.