# DayPlus

`DayPlus[date,n]` gives the date n days away from date.

`DayPlus[date,n,daytype]` gives the date that is n days of daytype away from date.

## Examples

Get the date 10 days from today:

```wolfram
DayPlus[Today, 10]
```

Get 5 business days from a specific date:

```wolfram
DayPlus[{2024, 1, 1}, 5, "BusinessDay"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayPlus.html) for more details.*