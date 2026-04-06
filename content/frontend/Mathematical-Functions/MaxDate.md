---
title: MaxDate
---

`MaxDate[{date1, date2, ...}]` gives the latest date of the dates.

- `MaxDate[interval]` gives the endpoint of the date interval.
- `MaxDate[interval, gran]` gives the endpoint of interval as specified by granularity gran.

## Examples

Find the latest date:

```wolfram
MaxDate[{DateObject[{2020, 1, 1}], DateObject[{2023, 6, 15}], DateObject[{2021, 12, 31}]}]
```

Get the end of a date interval:

```wolfram
MaxDate[DateInterval[{DateObject[{2020, 1, 1}], DateObject[{2023, 12, 31}]}]]
```

With granularity:

```wolfram
MaxDate[DateInterval[{DateObject[{2020, 1}], DateObject[{2023, 6}]}], "Month"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxDate.html) for more details.