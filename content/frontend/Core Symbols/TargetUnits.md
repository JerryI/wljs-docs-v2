# TargetUnits

`TargetUnits` is an option used to specify the desired output units for visualization functions operating on Quantity expressions.

## Examples

Plot with specific target units:

```wolfram
ListLinePlot[{Quantity[1, "Meters"], Quantity[2, "Meters"]}, TargetUnits -> "Feet"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TargetUnits.html) for more details.*