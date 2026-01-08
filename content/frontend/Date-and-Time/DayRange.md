---
title: DayRange
---

`DayRange[date1, date2]` gives the dates in the range from date1 to date2.

`DayRange[date1, date2, daytype]` gives the dates in the range from date1 to date2 that are of the specified daytype.

## Examples

Get all days in January:

```wolfram
DayRange[{2024, 1, 1}, {2024, 1, 31}]
```

Get only business days:

```wolfram
DayRange[{2024, 1, 1}, {2024, 1, 31}, "BusinessDay"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayRange.html) for more details.