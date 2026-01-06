---
title: MassImpermeableBoundaryValue
---

`MassImpermeableBoundaryValue[pred, vars, pars]` represents a mass impermeable boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`MassImpermeableBoundaryValue[pred, vars, pars, lkey]` represents a mass impermeable boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
MassImpermeableBoundaryValue[x == 0, {c}, <|"DiffusionCoefficient" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassImpermeableBoundaryValue.html) for more details.*