---
title: MinDate
---

`MinDate[{date1, date2, ...}]` gives the earliest date of the datei.

- `MinDate[interval]` gives the beginning of the date interval interval.
- `MinDate[interval, gran]` gives the beginning of interval as specified by granularity gran.

## Examples

```wolfram
MinDate[{Today, Yesterday, DateObject[{2020, 1, 1}]}]
```

```wolfram
MinDate[DateInterval[{DateObject[{2020, 1, 1}], DateObject[{2020, 12, 31}]}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MinDate.html) for more details.*