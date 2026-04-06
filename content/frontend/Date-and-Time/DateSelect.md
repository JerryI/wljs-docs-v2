---
title: DateSelect
---

`DateSelect[list, crit]` picks out all dates datei of a list for which crit[datei] is True.

`DateSelect[int, crit]` returns all dates within the DateInterval int for which crit[datei] is True.

`DateSelect[crit]` represents an operator form of DateSelect that can be applied to an expression.

## Examples

Select weekends from a date range:

```wolfram
dates = DateRange[{2024, 1, 1}, {2024, 1, 14}];
DateSelect[dates, DayName[#] === Saturday || DayName[#] === Sunday &]
```

Select Mondays:

```wolfram
DateSelect[dates, DayName[#] === Monday &]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateSelect.html) for more details.