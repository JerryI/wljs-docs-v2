---
title: ElectricFluxDensityValue
---

`ElectricFluxDensityValue[pred, vars, pars]` represents an electric flux density boundary condition for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

`ElectricFluxDensityValue[pred, vars, pars, lkey]` represents an electric flux density boundary condition with local parameters specified in pars[lkey].

## Examples

```wolfram
ElectricFluxDensityValue[x == 0, {D[u[x, y], x]}, {eps -> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ElectricFluxDensityValue.html) for more details.*