# NicholsGridLines

`NicholsGridLines` is an option to `NicholsPlot` that specifies contours of constant magnitude and constant phase of the closed-loop system.

## Examples

```wolfram
NicholsPlot[TransferFunctionModel[1/(s + 1), s], NicholsGridLines -> Automatic]
```

```wolfram
NicholsPlot[sys, NicholsGridLines -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NicholsGridLines.html) for more details.*