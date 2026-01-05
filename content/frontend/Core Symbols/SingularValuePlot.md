# SingularValuePlot

`SingularValuePlot[lsys]` generates a plot of the singular values of the transfer function for the system lsys.

`SingularValuePlot[lsys, {ωmin, ωmax}]` plots for the frequency range ωmin to ωmax.

`SingularValuePlot[expr, {ω, ωmin, ωmax}]` plots expr using the variable ω.

## Examples

Plot singular values of a transfer function:

```wolfram
sys = TransferFunctionModel[1/(s^2 + s + 1), s];
SingularValuePlot[sys]
```

Specify a frequency range:

```wolfram
SingularValuePlot[sys, {0.1, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SingularValuePlot.html) for more details.*