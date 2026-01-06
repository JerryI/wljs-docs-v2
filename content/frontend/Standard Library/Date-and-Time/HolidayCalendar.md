---
title: HolidayCalendar
---

`HolidayCalendar` is an option that specifies the holiday calendar schedule in business day functions.

## Examples

```wolfram
DayCount[{2023, 1, 1}, {2023, 1, 31}, HolidayCalendar -> "UnitedStates"]
```

```wolfram
BusinessDayQ[DateObject[{2023, 12, 25}], HolidayCalendar -> "UnitedStates"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HolidayCalendar.html) for more details.*