# DiscreteVariables

`DiscreteVariables` is an option for `NDSolve` and other functions that specifies variables that only change at discrete times in a temporal integration.

## Examples

Specify discrete variables:

```wolfram
NDSolve[eqns, y, {t, 0, 10}, DiscreteVariables -> {d}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteVariables.html) for more details.*