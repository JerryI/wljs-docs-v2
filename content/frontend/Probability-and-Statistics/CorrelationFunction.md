---
title: CorrelationFunction
---

`CorrelationFunction[data, hspec]` estimates the correlation function at lags hspec from data.

`CorrelationFunction[proc, hspec]` represents the correlation function at lags hspec for the random process proc.

`CorrelationFunction[proc, s, t]` represents the correlation function at times s and t for the random process proc.

## Examples

Estimate correlation from data:

```wolfram
data = RandomReal[1, 100];
CorrelationFunction[data, {1, 2, 3}]
```

Correlation function of a process:

```wolfram
CorrelationFunction[WienerProcess[], s, t]
(* Min[s, t] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CorrelationFunction.html) for more details.