---
title: LeapYearQ
---

`LeapYearQ[date]` returns `True` if the year corresponding to date is a leap year.

## Examples

Check if a year is a leap year:

```wolfram
LeapYearQ[2024]
(* True *)
```

Check a non-leap year:

```wolfram
LeapYearQ[2023]
(* False *)
```

Use with a date object:

```wolfram
LeapYearQ[DateObject[{2000, 1, 1}]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LeapYearQ.html) for more details.*