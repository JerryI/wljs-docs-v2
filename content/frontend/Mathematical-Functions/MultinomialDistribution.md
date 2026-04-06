---
title: MultinomialDistribution
---

`MultinomialDistribution[n,{p1,p2,…,pm}]` represents a multinomial distribution with n trials and probabilities pi.

## Examples

Create a multinomial distribution:

```wolfram
dist = MultinomialDistribution[10, {0.2, 0.3, 0.5}]
```

Compute the mean:

```wolfram
Mean[MultinomialDistribution[10, {0.2, 0.3, 0.5}]]
(* {2, 3, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MultinomialDistribution.html) for more details.