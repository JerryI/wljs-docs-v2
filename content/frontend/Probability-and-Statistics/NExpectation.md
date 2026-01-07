---
title: NExpectation
---

`NExpectation[expr, x \[Distributed] dist]` gives the numerical expectation of expr under the assumption that x follows the probability distribution dist.

`NExpectation[expr, {x1, x2, ...} \[Distributed] dist]` gives the numerical expectation of expr under the assumption that {x1, x2, ...} follows the multivariate distribution dist.

`NExpectation[expr, {x1 \[Distributed] dist1, x2 \[Distributed] dist2, ...}]` gives the numerical expectation of expr under the assumption that x1, x2, ... are independent and follow the distributions dist1, dist2, ....

`NExpectation[expr \[Conditioned] pred, ...]` gives the numerical conditional expectation of expr given pred.

## Examples

```wolfram
NExpectation[x^2, x \[Distributed] NormalDistribution[]]
(* 1. *)
```

```wolfram
NExpectation[x + y, {x \[Distributed] UniformDistribution[], y \[Distributed] UniformDistribution[]}]
(* 1. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NExpectation.html) for more details.*