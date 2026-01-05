# DateDifference

`DateDifference[date1, date2]` gives the number of days between two dates. `DateDifference[date1, date2, "unit"]` uses specified units.

## Examples

Calculate time differences:

```wolfram
DateDifference[{2024, 1, 1}, {2024, 12, 31}]
(* Quantity[365, "Days"] *)

(* In months *)
DateDifference[{2020, 1, 1}, {2024, 1, 1}, "Year"]
(* Quantity[4, "Years"] *)

(* Multiple units *)
DateDifference[{2024, 1, 1}, {2025, 6, 15}, {"Year", "Month", "Day"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateDifference.html) for more details.*