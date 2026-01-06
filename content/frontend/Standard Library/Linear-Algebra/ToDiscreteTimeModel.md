---
title: ToDiscreteTimeModel
---

`ToDiscreteTimeModel[lsys, τ]` gives the discrete-time approximation, with sampling period τ, of the continuous-time systems models lsys.

- `ToDiscreteTimeModel[tfm, τ, z]` specifies the transform variable z.

## Examples

Discretize a continuous model:
```wolfram
ToDiscreteTimeModel[TransferFunctionModel[1/(s + 1), s], 0.1]
```

Specify the z variable:
```wolfram
ToDiscreteTimeModel[continuousModel, 0.01, z]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToDiscreteTimeModel.html) for more details.*