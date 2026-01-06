---
title: StartingStepSize
---

`StartingStepSize` is an option to `NDSolve` and related functions that specifies the initial step size to use in trying to generate results.

## Examples

Use a small initial step size:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, 
  StartingStepSize -> 0.001]
```

For stiff equations, a smaller starting step may help:

```wolfram
NDSolve[{y'[x] == -1000 y[x], y[0] == 1}, y, {x, 0, 1}, 
  StartingStepSize -> 0.0001]
```

Combine with other method options:

```wolfram
NDSolve[{y'[x] == Sin[x] y[x], y[0] == 1}, y, {x, 0, 10}, 
  StartingStepSize -> 0.1, MaxStepSize -> 0.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StartingStepSize.html) for more details.*