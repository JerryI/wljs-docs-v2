# TickLabelPositioning

`TickLabelPositioning` is an option for `AxisObject` that specifies how the tick labels should be positioned relative to the ticks.

## Examples

```wolfram
AxisObject[Line[{{0, 0}, {1, 0}}], 
  TickLabelPositioning -> "Tip"]
```

```wolfram
Graphics[AxisObject[..., TickLabelPositioning -> "Base"]]
```

```wolfram
AxisObject[axis, TickLabelPositioning -> Automatic]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TickLabelPositioning.html) for more details.*