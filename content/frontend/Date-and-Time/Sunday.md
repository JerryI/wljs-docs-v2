---
title: Sunday
---

`Sunday` is a day of the week.

## Examples

Use in date functions:

```wolfram
DayName[DateObject[{2024, 1, 7}]] === Sunday
```

Find next Sunday:

```wolfram
DateObject[Today, Sunday]
```

In date patterns:

```wolfram
DateSelect[dates, DayName[#] === Sunday &]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sunday.html) for more details.