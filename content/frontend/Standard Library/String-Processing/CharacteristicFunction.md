---
title: CharacteristicFunction
---

`CharacteristicFunction[dist, t]` gives the characteristic function for the distribution dist as a function of the variable t.

`CharacteristicFunction[dist, {t1, t2, …}]` gives the characteristic function for the multivariate distribution dist as a function of the variables t1, t2, ….

## Examples

Characteristic function of a normal distribution:

```wolfram
CharacteristicFunction[NormalDistribution[0, 1], t]
(* E^(-t^2/2) *)
```

For an exponential distribution:

```wolfram
CharacteristicFunction[ExponentialDistribution[1], t]
(* 1/(1 - I t) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CharacteristicFunction.html) for more details.*