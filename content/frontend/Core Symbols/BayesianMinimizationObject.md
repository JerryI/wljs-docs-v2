# BayesianMinimizationObject

`BayesianMinimizationObject[…]` represents the result of a Bayesian minimization process.

## Examples

Perform Bayesian minimization:

```wolfram
result = BayesianMinimization[#^2 &, {-10, 10}]
(* BayesianMinimizationObject[...] *)
```

Extract the minimum:

```wolfram
result["MinimumConfiguration"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BayesianMinimizationObject.html) for more details.*