# TimeZone

`TimeZone` is an option for `DateObject`, `DateString`, and related functions that specifies the time zone to use for dates and times.

## Examples

Create date in specific timezone:

```wolfram
DateObject[{2024, 1, 15, 12, 0}, TimeZone -> "America/New_York"]
```

Check current timezone:

```wolfram
$TimeZone
(* -5. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeZone.html) for more details.*