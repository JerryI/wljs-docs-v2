# MaxSteps

`MaxSteps` is an option to functions like `NDSolve` that specifies the maximum number of steps to take in generating a result.

## Examples

Limit the number of steps in numerical solving:
```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 100}, MaxSteps -> 1000]
```

Use with ParametricNDSolve:
```wolfram
ParametricNDSolve[{y'[x] == a*y[x], y[0] == 1}, y, {x, 0, 10}, {a}, MaxSteps -> 500]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxSteps.html) for more details.*