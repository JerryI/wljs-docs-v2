# BodePlot

`BodePlot[lsys]` generates a Bode plot of a linear time-invariant system lsys.

`BodePlot[lsys, {ωmin, ωmax}]` plots for the frequency range ωmin to ωmax.

`BodePlot[expr, {ω, ωmin, ωmax}]` plots expr using the variable ω.

## Examples

Bode plot of a transfer function:

```wolfram
BodePlot[TransferFunctionModel[1/(s + 1), s]]
```

Specify frequency range:

```wolfram
BodePlot[TransferFunctionModel[1/(s^2 + s + 1), s], {0.1, 100}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BodePlot.html) for more details.*