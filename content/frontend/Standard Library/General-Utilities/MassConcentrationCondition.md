---
title: MassConcentrationCondition
---

`MassConcentrationCondition[pred, vars, pars]` represents a mass concentration boundary condition for PDEs with predicate *pred* indicating where it applies, with model variables *vars* and global parameters *pars*.

- `MassConcentrationCondition[pred, vars, pars, lkey]` represents a thermal surface boundary condition with local parameters specified in *pars[lkey]*.

## Examples

```wolfram
MassConcentrationCondition[x == 0, {c}, <|"Concentration" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassConcentrationCondition.html) for more details.*