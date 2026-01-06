# StrataVariables

`StrataVariables` is an option for fitting functions such as `CoxModelFit` that specify the variables on which the model should be stratified.

## Examples

Stratified Cox model:

```wolfram
CoxModelFit[data, {x1, x2}, t, StrataVariables -> {group}]
```

Multiple strata:

```wolfram
CoxModelFit[data, covariates, time, StrataVariables -> {var1, var2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StrataVariables.html) for more details.*