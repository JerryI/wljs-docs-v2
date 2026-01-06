# DateRange

`DateRange[date1, date2]` gives all dates in the range from date1 to date2.

`DateRange[date1, date2, increment]` gives the dates in the range from date1 to date2 that are increment apart.

## Examples

Get all days in a range:

```wolfram
DateRange[{2024, 1, 1}, {2024, 1, 5}]
```

Monthly intervals:

```wolfram
DateRange[{2024, 1, 1}, {2024, 12, 1}, "Month"]
```

Weekly intervals:

```wolfram
DateRange[DateObject[{2024, 1, 1}], DateObject[{2024, 2, 1}], "Week"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateRange.html) for more details.*