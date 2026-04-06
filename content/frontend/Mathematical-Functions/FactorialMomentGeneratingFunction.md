---
title: FactorialMomentGeneratingFunction
---

`FactorialMomentGeneratingFunction[dist, t]` gives the factorial moment-generating function for the distribution dist as a function of t.

## Examples

Factorial MGF of Poisson distribution:

```wolfram
FactorialMomentGeneratingFunction[PoissonDistribution[λ], t]
(* E^(λ (-1 + t)) *)
```

For binomial distribution:

```wolfram
FactorialMomentGeneratingFunction[BinomialDistribution[n, p], t]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorialMomentGeneratingFunction.html) for more details.