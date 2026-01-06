---
title: BiquadraticFilterModel
---

`BiquadraticFilterModel[{ω, q}]` creates a lowpass biquadratic filter using the characteristic frequency ω and the quality factor q.

`BiquadraticFilterModel[{"type", spec}]` creates a filter of a given type.

`BiquadraticFilterModel[{"type", spec}, var]` expresses the model in terms of the variable var.

## Examples

Create a lowpass biquadratic filter:

```wolfram
BiquadraticFilterModel[{1000, 2}]
```

Highpass filter:

```wolfram
BiquadraticFilterModel[{"Highpass", {1000, 2}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BiquadraticFilterModel.html) for more details.*