---
title: LearnDistribution
---

`LearnDistribution[{example1,example2,…}]` generates a LearnedDistribution[…] that attempts to represent an underlying distribution for the examples given.

## Examples

Learn a distribution from data:

```wolfram
data = RandomVariate[NormalDistribution[], 1000];
LearnDistribution[data]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LearnDistribution.html) for more details.