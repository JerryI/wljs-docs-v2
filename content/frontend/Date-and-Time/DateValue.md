---
title: DateValue
---

`DateValue["elem"]` gives the specified element of the current date and time. `DateValue[date, elem]` extracts the element from a specific date.

## Examples

Get the current year:

```wolfram
DateValue["Year"]
(* 2025 *)
```

Extract multiple elements:

```wolfram
DateValue[{"Month", "Day", "Year"}]
(* {1, 15, 2025} *)
```

Get hour from a specific date:

```wolfram
DateValue[DateObject[{2024, 12, 25, 10, 30, 0}], "Hour"]
(* 10 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateValue.html) for more details.