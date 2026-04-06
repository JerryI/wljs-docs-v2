---
title: HeatTransferPDEComponent
---

`HeatTransferPDEComponent[vars,pars]` yields a heat transfer PDE term with variables vars and parameters pars.

## Examples

Create a heat transfer PDE component:

```wolfram
HeatTransferPDEComponent[{T[t, x, y], t, {x, y}}, <|"ThermalConductivity" -> 1|>]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatTransferPDEComponent.html) for more details.