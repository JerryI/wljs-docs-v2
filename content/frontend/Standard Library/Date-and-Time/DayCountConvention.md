# DayCountConvention

`DayCountConvention` is an option that specifies the day count convention used by `DateDifference`.

## Examples

Use Actual/360 day count convention:

```wolfram
DateDifference[{2020, 1, 1}, {2020, 12, 31}, DayCountConvention -> "Actual360"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayCountConvention.html) for more details.*