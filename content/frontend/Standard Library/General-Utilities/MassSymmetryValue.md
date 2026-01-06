---
title: MassSymmetryValue
---

`MassSymmetryValue[pred, vars, pars]` represents a mass symmetry boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`MassSymmetryValue[pred, vars, pars, lkey]` represents a mass symmetry boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
MassSymmetryValue[x == 0, {c}, <|"DiffusionCoefficient" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassSymmetryValue.html) for more details.*