---
title: NoncentralStudentTDistribution
---

`NoncentralStudentTDistribution[ν, δ]` represents a noncentral Student t distribution with ν degrees of freedom and noncentrality parameter δ.

## Examples

```wolfram
dist = NoncentralStudentTDistribution[5, 2];
PDF[dist, x]
```

```wolfram
RandomVariate[NoncentralStudentTDistribution[10, 1], 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NoncentralStudentTDistribution.html) for more details.