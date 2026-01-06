---
title: HeatRadiationValue
---

`HeatRadiationValue[pred,vars,pars]` represents a thermal radiation boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`HeatRadiationValue[pred,vars,pars,lkey]` represents a thermal radiation boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
HeatRadiationValue[True, {Subscript[T, x, t]}, <|"SurfaceEmissivity" -> 0.9|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatRadiationValue.html) for more details.*