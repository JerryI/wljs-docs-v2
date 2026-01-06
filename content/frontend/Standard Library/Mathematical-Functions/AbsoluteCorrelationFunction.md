---
title: AbsoluteCorrelationFunction
---

`AbsoluteCorrelationFunction[data, hspec]` estimates the absolute correlation function at lags hspec from data.

`AbsoluteCorrelationFunction[proc, hspec]` represents the absolute correlation function at lags hspec for the random process proc.

## Examples

Compute the absolute correlation function for sample data:

```wolfram
data = RandomReal[1, 100];
AbsoluteCorrelationFunction[data, {0, 1, 2, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteCorrelationFunction.html) for more details.*