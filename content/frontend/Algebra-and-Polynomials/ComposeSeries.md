---
title: ComposeSeries
---

`ComposeSeries[series1, series2, ...]` composes several power series.

## Examples

Compose two series:

```wolfram
s1 = Series[Exp[x], {x, 0, 3}];
s2 = Series[Sin[y], {y, 0, 3}];
ComposeSeries[s1, s2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ComposeSeries.html) for more details.