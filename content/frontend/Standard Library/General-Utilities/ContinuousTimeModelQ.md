---
title: ContinuousTimeModelQ
---

`ContinuousTimeModelQ[lsys]` gives True if lsys is a continuous-time systems model, and False otherwise.

## Examples

Test a continuous-time transfer function model:

```wolfram
tf = TransferFunctionModel[1/(s + 1), s];
ContinuousTimeModelQ[tf]
(* True *)
```

Test a discrete-time model:

```wolfram
dtf = TransferFunctionModel[1/(z + 1), z, SamplingPeriod -> 1];
ContinuousTimeModelQ[dtf]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousTimeModelQ.html) for more details.*