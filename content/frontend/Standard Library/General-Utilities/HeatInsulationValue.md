---
title: HeatInsulationValue
---

`HeatInsulationValue[pred,vars,pars]` represents a thermal insulation boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`HeatInsulationValue[pred,vars,pars,lkey]` represents a thermal insulation boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
HeatInsulationValue[y == 0, {T[x, y, t], t}, <|"ThermalConductivity" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatInsulationValue.html) for more details.*