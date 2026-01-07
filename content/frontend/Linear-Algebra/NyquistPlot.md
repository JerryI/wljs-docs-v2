---
title: NyquistPlot
---

`NyquistPlot[lsys]` generates a Nyquist plot of the transfer function for the system *lsys*.

- `NyquistPlot[lsys, {ωmin, ωmax}]` plots for the frequency range *ωmin* to *ωmax*.
- `NyquistPlot[expr, {ω, ωmin, ωmax}]` plots *expr* using the variable *ω*.

## Examples

```wolfram
NyquistPlot[TransferFunctionModel[1/(s + 1), s]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NyquistPlot.html) for more details.*