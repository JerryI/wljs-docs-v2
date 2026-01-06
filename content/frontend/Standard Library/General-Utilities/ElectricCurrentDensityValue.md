---
title: ElectricCurrentDensityValue
---

`ElectricCurrentDensityValue[pred, vars, pars]` represents a current density boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`ElectricCurrentDensityValue[pred, vars, pars, lkey]` represents a current density boundary condition with local parameters specified in pars[lkey].

## Examples

Create current density boundary condition:

```wolfram
ElectricCurrentDensityValue[x == 0, {V}, <|"CurrentDensity" -> 1|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ElectricCurrentDensityValue.html) for more details.*