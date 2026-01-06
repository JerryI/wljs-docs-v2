---
title: ExtentElementFunction
---

`ExtentElementFunction` is an option to `DiscretePlot` and `DiscretePlot3D` that gives a function to use to generate the primitives for rendering each extent element.

## Examples

Custom extent rendering:

```wolfram
DiscretePlot[n^2, {n, 10}, ExtentElementFunction -> (Rectangle @@ #1 &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtentElementFunction.html) for more details.*