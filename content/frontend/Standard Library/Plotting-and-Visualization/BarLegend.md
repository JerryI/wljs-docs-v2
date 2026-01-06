# BarLegend

`BarLegend[cf]` generates a legend that identifies colors from the color function cf with an automatic range of values.

`BarLegend[{cf, {min, max}}]` generates a legend that identifies colors from the color function cf with the range of values between min and max.

## Examples

Create a color bar legend:

```wolfram
BarLegend["Rainbow"]
```

With specified range:

```wolfram
BarLegend[{"TemperatureMap", {0, 100}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BarLegend.html) for more details.*