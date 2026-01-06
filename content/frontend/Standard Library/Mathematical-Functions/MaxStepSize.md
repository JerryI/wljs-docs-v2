---
title: MaxStepSize
---

`MaxStepSize` is an option to functions like `NDSolve` that specifies the maximum size of a single step used in generating a result.

## Examples

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, MaxStepSize -> 0.1]
```

```wolfram
NDSolve[equations, y, {x, 0, 1}, MaxStepSize -> 0.01]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxStepSize.html) for more details.*