---
title: AsymptoticProbability
---

`AsymptoticProbability[pred, x \[Distributed] dist, a -> a0]` computes an asymptotic approximation for the probability of pred centered at a0, under the assumption that x follows the probability distribution dist.

`AsymptoticProbability[pred, vars, {a, a0, n}]` computes the asymptotic probability to order n.

## Examples

Asymptotic probability:

```wolfram
AsymptoticProbability[x > 0, x \[Distributed] NormalDistribution[a, 1], 
  a -> Infinity]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticProbability.html) for more details.