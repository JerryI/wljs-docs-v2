---
title: DayCount
---

`DayCount[date1,date2]` gives the number of days from date1 to date2.

`DayCount[date1,date2,daytype]` gives the number of days of the specified daytype from date1 to date2.

## Examples

Count days between two dates:

```wolfram
DayCount[{2020, 1, 1}, {2020, 12, 31}]
(* 365 *)
```

Count only business days:

```wolfram
DayCount[{2020, 1, 1}, {2020, 1, 31}, "BusinessDay"]
(* 22 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayCount.html) for more details.