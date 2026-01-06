---
title: FromJulianDate
---

`FromJulianDate[jd]` gives a date object corresponding to the Julian date jd.

- `FromJulianDate["type", jd]` gives a date object corresponding to the specified Julian date variant.

## Examples

Convert a Julian date to a date object:

```wolfram
FromJulianDate[2451545]
```

Convert a modified Julian date:

```wolfram
FromJulianDate["ModifiedJulian", 51545]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromJulianDate.html) for more details.*