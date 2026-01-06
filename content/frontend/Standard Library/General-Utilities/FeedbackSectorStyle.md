# FeedbackSectorStyle

`FeedbackSectorStyle` is an option to `NyquistPlot` that specifies the style in which graphics of `FeedbackSector` should be drawn.

## Examples

Create a Nyquist plot with custom feedback sector style:

```wolfram
NyquistPlot[TransferFunctionModel[1/(s + 1), s], 
  FeedbackSectorStyle -> {Red, Dashed}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeedbackSectorStyle.html) for more details.*