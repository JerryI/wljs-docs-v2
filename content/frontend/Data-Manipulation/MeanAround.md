---
title: MeanAround
---

`MeanAround[{x1,x2,x3,…}]` gives an Around object describing the mean of the xi and its uncertainty.

`MeanAround[{{x11,x12,…},{x21,…},…}]` gives a VectorAround object describing the means of the vectors xi and their covariance.

## Examples

Compute mean with uncertainty:

```wolfram
MeanAround[{1.2, 1.5, 1.3, 1.4}]
(* Around[1.35, 0.065] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeanAround.html) for more details.