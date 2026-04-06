---
title: ArcSinDistribution
---

`ArcSinDistribution[{xmin, xmax}]` represents the arc sine distribution supported between xmin and xmax.

`ArcSinDistribution[]` represents the arc sine distribution supported between zero and one.

## Examples

Create an arc sine distribution:

```wolfram
dist = ArcSinDistribution[]
```

Generate random samples:

```wolfram
RandomVariate[ArcSinDistribution[], 10]
```

Plot the PDF:

```wolfram
Plot[PDF[ArcSinDistribution[], x], {x, 0, 1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArcSinDistribution.html) for more details.