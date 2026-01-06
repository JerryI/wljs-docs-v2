---
title: Expectation
---

`Expectation[expr, x \[Distributed] dist]` gives the expectation of expr under the assumption that x follows the probability distribution dist.

## Examples

Expected value of x:

```wolfram
Expectation[x, x \[Distributed] NormalDistribution[0, 1]]
(* 0 *)
```

Expectation of x^2:

```wolfram
Expectation[x^2, x \[Distributed] UniformDistribution[{0, 1}]]
(* 1/3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Expectation.html) for more details.*