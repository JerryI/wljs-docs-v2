---
title: WienerFilter
---

`WienerFilter[data,r]` removes noise from data by applying a range-r Wiener filter.

`WienerFilter[data,r,ns]` assumes an additive noise power value ns.

`WienerFilter[data,{r1,r2,…},…]` uses radius ri at level i in data.

## Examples

Apply a Wiener filter to noisy data:

```wolfram
data = Table[Sin[x] + RandomReal[{-0.2, 0.2}], {x, 0, 10, 0.1}];
WienerFilter[data, 3]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WienerFilter.html) for more details.