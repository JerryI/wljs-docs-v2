---
title: HeatOutflowValue
---

`HeatOutflowValue[pred,vars,pars]` represents a thermal outflow boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`HeatOutflowValue[pred,vars,pars,lkey]` represents a thermal outflow boundary condition with local parameters specified in pars[lkey].

## Examples

Define a heat outflow boundary condition:

```wolfram
HeatOutflowValue[x == 1, {T, {x}}, <||>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeatOutflowValue.html) for more details.*