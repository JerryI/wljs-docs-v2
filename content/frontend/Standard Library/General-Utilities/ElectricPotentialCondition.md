---
title: ElectricPotentialCondition
---

`ElectricPotentialCondition[pred, vars, pars]` represents an electric potential surface boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`ElectricPotentialCondition[pred, vars, pars, lkey]` represents an electric potential surface boundary condition with local parameters specified in pars[lkey].

## Examples

Create electric potential condition:

```wolfram
ElectricPotentialCondition[x == 0, {V}, <|"Potential" -> 0|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ElectricPotentialCondition.html) for more details.*