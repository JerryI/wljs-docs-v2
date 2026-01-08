---
title: BayesianMaximizationObject
---

`BayesianMaximizationObject[...]` represents the result of a Bayesian maximization process.

## Examples

Perform Bayesian maximization:

```wolfram
result = BayesianMaximization[-#^2 &, {-10, 10}]
(* BayesianMaximizationObject[...] *)
```

Extract the maximum:

```wolfram
result["MaximumConfiguration"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BayesianMaximizationObject.html) for more details.