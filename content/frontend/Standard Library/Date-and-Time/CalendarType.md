# CalendarType

`CalendarType` is an option that determines the calendar system in which all dates are to be interpreted and output.

## Examples

Create date with specific calendar:

```wolfram
DateObject[{2024, 1, 1}, CalendarType -> "Gregorian"]
```

Use Islamic calendar:

```wolfram
DateObject[{1445, 6, 15}, CalendarType -> "Islamic"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CalendarType.html) for more details.*