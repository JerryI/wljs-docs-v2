---
title: LinearOffsetFunction
---

`LinearOffsetFunction` is an option for linear and generalized linear model fitting functions that specifies a component for the model that is to be assumed known.

## Examples

```wolfram
LinearModelFit[data, x, x, LinearOffsetFunction -> (0.5 # &)]
```

```wolfram
GeneralizedLinearModelFit[data, x, x, LinearOffsetFunction -> offset]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinearOffsetFunction.html) for more details.*