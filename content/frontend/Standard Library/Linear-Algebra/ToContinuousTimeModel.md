---
title: ToContinuousTimeModel
---

`ToContinuousTimeModel[lsys]` gives the continuous-time approximation of the discrete-time systems models lsys.

- `ToContinuousTimeModel[tfm, s]` specifies the transform variable s.

## Examples

Convert discrete to continuous model:
```wolfram
ToContinuousTimeModel[TransferFunctionModel[{1/(z - 0.5)}, z]]
```

Specify the variable:
```wolfram
ToContinuousTimeModel[discreteModel, s]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToContinuousTimeModel.html) for more details.*