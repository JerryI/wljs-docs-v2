---
title: NicholsPlot
---

`NicholsPlot[lsys]` generates a Nichols plot of the transfer function for the system lsys.

`NicholsPlot[lsys,{ωmin,ωmax}]` plots for the frequency range ωmin to ωmax.

`NicholsPlot[expr,{ω,ωmin,ωmax}]` plots expr using the variable ω.

## Examples

Plot a Nichols chart for a transfer function:

```wolfram
NicholsPlot[TransferFunctionModel[1/(s^2 + s + 1), s]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NicholsPlot.html) for more details.