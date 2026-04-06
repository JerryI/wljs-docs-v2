---
title: TruncatedDistribution
---

`TruncatedDistribution[{xmin, xmax}, dist]` represents the distribution obtained by truncating the values of dist to lie between xmin and xmax.

- `TruncatedDistribution[{{xmin, xmax}, {ymin, ymax}, ...}, dist]` represents the distribution obtained by truncating the values of the multivariate distribution dist to lie between xmin and xmax, ymin and ymax, etc.

## Examples

```wolfram
TruncatedDistribution[{0, Infinity}, NormalDistribution[]]
```

```wolfram
Mean[TruncatedDistribution[{0, 1}, UniformDistribution[{-1, 2}]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TruncatedDistribution.html) for more details.