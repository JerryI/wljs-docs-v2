---
title: HeatTemperatureCondition
---

`HeatTemperatureCondition[pred, vars, pars]` represents a thermal surface boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

- `HeatTemperatureCondition[pred, vars, pars, lkey]` represents a thermal surface boundary condition with local parameters specified in pars[lkey].

## Examples

Define a temperature boundary condition:
```wolfram
HeatTemperatureCondition[x == 0, {T[x, t], {x, t}}, <|"AmbientTemperature" -> 300|>]
```

Use in a heat transfer problem:
```wolfram
HeatTransferPDEComponent[vars, pars, "BoundaryConditions" -> {HeatTemperatureCondition[...]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatTemperatureCondition.html) for more details.*