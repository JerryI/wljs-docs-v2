---
title: SplicedDistribution
---

`SplicedDistribution[{w1, w2, ..., wn}, {c0, c1, ..., cn}, {dist1, dist2, ..., distn}]` represents the distribution obtained by splicing the distributions dist1, dist2, … truncated on the intervals {c0, c1}, {c1, c2}, … with weights w1, w2, ….

## Examples

```wolfram
dist = SplicedDistribution[{1, 1}, {0, 1, 2}, {UniformDistribution[], NormalDistribution[1.5, 0.2]}];
PDF[dist, x]
```

```wolfram
RandomVariate[SplicedDistribution[{1, 1}, {0, 1, 2}, {UniformDistribution[], UniformDistribution[{1, 2}]}], 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SplicedDistribution.html) for more details.