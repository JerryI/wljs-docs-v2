---
title: BinomialDistribution
---

`BinomialDistribution[n, p]` represents a binomial distribution with n trials and success probability p.

## Examples

Random samples:

```wolfram
RandomVariate[BinomialDistribution[10, 0.5], 5]
(* {5, 6, 4, 5, 7} *)
```

Probability of exactly 3 successes:

```wolfram
PDF[BinomialDistribution[10, 0.5], 3]
(* 15/128 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BinomialDistribution.html) for more details.