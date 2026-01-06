---
title: DateInterval
---

`DateInterval[{start, end}]` represents the continuous interval of time between start and end.

`DateInterval[{start, end}, gran]` represents an interval of dates with calendar granularity gran.

`DateInterval[{{start1, end1}, {start2, end2}, ...}]` represents the union of intervals.

`DateInterval[gdate]` gives the date interval from the initial to final instants of the granular date object gdate.

## Examples

Create a date interval:

```wolfram
DateInterval[{DateObject[{2024, 1, 1}], DateObject[{2024, 12, 31}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateInterval.html) for more details.*