---
title: DateOverlapsQ
---

`DateOverlapsQ[date1, date2]` returns `True` if the calendar dates date1 and date2 overlap, and `False` otherwise.

## Examples

Check if two date ranges overlap:

```wolfram
DateOverlapsQ[DateInterval[{{2020, 1}, {2020, 6}}], DateInterval[{{2020, 4}, {2020, 12}}]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateOverlapsQ.html) for more details.