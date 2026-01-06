# StepMonitor

`StepMonitor` is an option for iterative numerical computation functions that gives an expression to evaluate whenever a step is taken by the numerical method used.

## Examples

Monitor NDSolve steps:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 2},
  StepMonitor :> Print["Step at x = ", x]]
```

Count iteration steps:

```wolfram
count = 0;
FindRoot[Sin[x] - x/2, {x, 2}, StepMonitor :> count++];
count
```

Track solution progress:

```wolfram
points = {};
NDSolve[{y'[x] == Sin[y[x]], y[0] == 1}, y, {x, 0, 10},
  StepMonitor :> AppendTo[points, {x, y[x]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StepMonitor.html) for more details.*