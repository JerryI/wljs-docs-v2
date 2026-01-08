---
title: CalendarConvert
---

`CalendarConvert[date, calendar]` converts the date object date to the specified calendar type calendar.

`CalendarConvert[date]` converts to the default calendar type.

## Examples

Convert to different calendar:

```wolfram
CalendarConvert[DateObject[{2024, 1, 1}], "Jewish"]
```

Convert from Islamic calendar:

```wolfram
CalendarConvert[DateObject[{1445, 1, 1}, CalendarType -> "Islamic"], "Gregorian"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CalendarConvert.html) for more details.