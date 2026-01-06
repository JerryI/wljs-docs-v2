---
title: ConformDates
---

`ConformDates[dates]` returns a list of dates where all dates are made to have conforming properties, including calendar, time zone and granularity.

`ConformDates[dates, rdate]` returns all dates in a form consistent with the reference date rdate.

## Examples

Conform dates:

```wolfram
ConformDates[{DateObject[{2020, 1, 1}], DateObject[{2020, 6, 15, 12, 30}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConformDates.html) for more details.*