---
title: LocalTimeZone
---

`LocalTimeZone[]` gives the current time zone for the current geo location.

`LocalTimeZone[loc]` gives the current time zone for the geo location specified by loc.

`LocalTimeZone[loc, date]` gives the time zone for the geo location loc on the specified date.

`LocalTimeZone[loc, date, "prop"]` gives the specified property of the time zone.

## Examples

Get the current local time zone:

```wolfram
LocalTimeZone[]
(* "America/New_York" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LocalTimeZone.html) for more details.*