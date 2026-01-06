# ScalingFunctions

`ScalingFunctions` is an option for `ListPlot`, `BarChart`, `Histogram`, and other plotting functions that specifies what scaling functions should be used.

## Examples

```wolfram
ListPlot[Table[2^x, {x, 1, 10}], ScalingFunctions -> "Log"]
```

```wolfram
BarChart[{1, 10, 100, 1000}, ScalingFunctions -> "Log10"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ScalingFunctions.html) for more details.*