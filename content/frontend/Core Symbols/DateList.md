# DateList

`DateList[]` gives the current local date and time in the form `{year, month, day, hour, minute, second}`. `DateList[date]` gives a date list for a given date specification.

## Examples

Get current date as a list:

```wolfram
DateList[]
(* {2025, 1, 15, 14, 30, 45.123} *)
```

Convert a date string to a list:

```wolfram
DateList["January 1, 2024"]
(* {2024, 1, 1, 0, 0, 0.} *)
```

Get date components from a DateObject:

```wolfram
DateList[Now]
(* {2025, 1, 15, 14, 30, 45.123} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateList.html) for more details.*