---
title: BusinessDayQ
---

`BusinessDayQ[date]` returns `True` if the date is a business day and returns `False` otherwise.

## Examples

```wolfram
BusinessDayQ[DateObject[{2024, 1, 15}]]
(* True *)
```

```wolfram
BusinessDayQ[DateObject[{2024, 1, 14}]] (* Sunday *)
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BusinessDayQ.html) for more details.