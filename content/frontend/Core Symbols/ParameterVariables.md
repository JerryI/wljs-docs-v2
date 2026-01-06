# ParameterVariables

`ParameterVariables` is an option for `GroebnerBasis` and `PolynomialReduce`. These variables will always be last in the ordering. By default, all variables that are not otherwise classified will become parameter variables. By specifying them explicitly one fixes their relative positions in the overall variable ordering.

## Examples

```wolfram
GroebnerBasis[{x^2 + a x + 1}, {x}, ParameterVariables -> {a}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParameterVariables.html) for more details.*