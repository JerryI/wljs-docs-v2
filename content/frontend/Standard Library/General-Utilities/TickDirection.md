# TickDirection

`TickDirection` is an option for `AxisObject` that specifies where the ticks are drawn relative to the axis.

## Examples

Ticks pointing inward:

```wolfram
AxisObject[Line[{{0, 0}, {1, 0}}], TickDirection -> "Inward"]
```

Outward ticks:

```wolfram
AxisObject[Line[{{0, 0}, {1, 0}}], TickDirection -> "Outward"]
```

Both sides:

```wolfram
AxisObject[Line[{{0, 0}, {1, 0}}], TickDirection -> "Center"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TickDirection.html) for more details.*