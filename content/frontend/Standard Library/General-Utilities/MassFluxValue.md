---
title: MassFluxValue
---

`MassFluxValue[pred, vars, pars]` represents a mass flux boundary condition for PDEs with predicate `pred` indicating where it applies, with model variables `vars` and global parameters `pars`.

- `MassFluxValue[pred, vars, pars, lkey]` represents a mass flux boundary condition with local parameters specified in `pars[lkey]`.

## Examples

```wolfram
MassFluxValue[x == 0, {c, {x}}, <|"MassFlux" -> 1|>]
```

```wolfram
MassFluxValue[boundary, variables, parameters]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MassFluxValue.html) for more details.*