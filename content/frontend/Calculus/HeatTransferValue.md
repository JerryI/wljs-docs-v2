---
title: HeatTransferValue
---

`HeatTransferValue[pred, vars, pars]` represents a thermal transfer boundary condition for PDEs with predicate `pred` indicating where it applies, with model variables `vars` and global parameters `pars`.

- `HeatTransferValue[pred, vars, pars, lkey]` represents a thermal transfer boundary condition with local parameters specified in `pars[lkey]`.

## Examples

```wolfram
HeatTransferValue[x == 0, {T, {x}}, <|"AmbientTemperature" -> 300|>]
```

```wolfram
HeatTransferPDEComponent[{T[x, t], t}, {x}, <|"ThermalConductivity" -> 1|>]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatTransferValue.html) for more details.