---
title: TimeZoneOffset
---

`TimeZoneOffset[tz]` gives the numeric offset between the time zone tz and GMT on the current date.

- `TimeZoneOffset[loc]` gives the numeric offset between the time zone for the location loc and GMT.
- `TimeZoneOffset[tz, base]` gives the numeric offset between tz and the specified base time zone.
- `TimeZoneOffset[tz, date]` gets a list of possible time zone offsets for tz at the given date list.
- `TimeZoneOffset[tz, base, date]` gives the numeric offset between tz and base on the specified date.

## Examples

```wolfram
TimeZoneOffset["America/New_York"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeZoneOffset.html) for more details.