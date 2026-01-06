# PrecisionGoal

`PrecisionGoal` is an option for various numerical operations which specifies how many effective digits of precision should be sought in the final result.

## Examples

Higher precision integration:

```wolfram
NIntegrate[Sin[x], {x, 0, Pi}, PrecisionGoal -> 15]
```

In numerical solving:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, PrecisionGoal -> 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrecisionGoal.html) for more details.*