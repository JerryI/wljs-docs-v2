---
title: CensoredDistribution
---

`CensoredDistribution[{xmin, xmax}, dist]` represents the distribution of values that come from dist and are censored to be between xmin and xmax.

`CensoredDistribution[{{xmin, xmax}, {ymin, ymax}, ...}, dist]` represents the distribution of values from a multivariate distribution dist censored to specified ranges.

## Examples

Create a censored normal distribution between 0 and 2:

```wolfram
dist = CensoredDistribution[{0, 2}, NormalDistribution[1, 1]];
Mean[dist]
(* 1.0 *)
```

Sample from a censored distribution:

```wolfram
RandomVariate[CensoredDistribution[{0, Infinity}, NormalDistribution[]], 5]
(* {0.42, 1.21, 0.05, 0.87, 0.33} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CensoredDistribution.html) for more details.