# StabilityMargins

`StabilityMargins` is an option to frequency response plots such as `BodePlot`, `NyquistPlot`, and `NicholsPlot` that specifies the gain and phase margins to be shown on the plot.

## Examples

Show stability margins on a Bode plot:

```wolfram
sys = TransferFunctionModel[1/(s^2 + s + 1), s];
BodePlot[sys, StabilityMargins -> True]
```

Nyquist plot with margins:

```wolfram
NyquistPlot[sys, StabilityMargins -> True]
```

Nichols plot with margins:

```wolfram
NicholsPlot[sys, StabilityMargins -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StabilityMargins.html) for more details.*