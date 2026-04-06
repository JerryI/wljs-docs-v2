---
title: DayMatchQ
---

`DayMatchQ[date, daytype]` returns True if the date matches the daytype specification and returns False otherwise.

## Examples

Check if a date is a weekend:

```wolfram
DayMatchQ[{2024, 1, 6}, "Weekend"]
(* True - Saturday *)
```

Check if it's a business day:

```wolfram
DayMatchQ[{2024, 1, 5}, "BusinessDay"]
(* True - Friday *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayMatchQ.html) for more details.