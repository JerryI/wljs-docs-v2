# DayRound

`DayRound[date, daytype]` rounds date to the nearest day of daytype, using the next-day rounding convention.

`DayRound[date, daytype, rounding]` rounds date to the nearest day of daytype, using rounding.

## Examples

Round to the next business day:

```wolfram
DayRound[{2024, 1, 6}, "BusinessDay"]
(* Next Monday since Saturday is not a business day *)
```

Round to the previous weekday:

```wolfram
DayRound[{2024, 1, 7}, "Weekday", "Previous"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DayRound.html) for more details.*