---
title: Distributed
---

`Distributed[x, dist]` or `x \[Distributed] dist` asserts that the random variable x is distributed according to the probability distribution dist.

`Distributed[{x1, x2, ...}, dist]` asserts that the random vector is distributed according to a multivariate distribution.

## Examples

Use in probability calculations:

```wolfram
Probability[x > 1, x \[Distributed] NormalDistribution[0, 1]]
```

Expected value:

```wolfram
Expectation[x^2, x \[Distributed] ExponentialDistribution[1]]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Distributed.html) for more details.*