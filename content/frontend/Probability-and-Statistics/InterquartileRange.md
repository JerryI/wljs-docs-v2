---
title: InterquartileRange
---

`InterquartileRange[data]` gives the difference between the upper and lower quartiles for the elements in data.

- `InterquartileRange[data, {{a, b}, {c, d}}]` uses the quantile definition specified by parameters a, b, c, d.
- `InterquartileRange[dist]` gives the difference between the upper and lower quartiles for the distribution dist.

## Examples

Compute the interquartile range of data:
```wolfram
InterquartileRange[{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}]
```

For a distribution:
```wolfram
InterquartileRange[NormalDistribution[0, 1]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InterquartileRange.html) for more details.