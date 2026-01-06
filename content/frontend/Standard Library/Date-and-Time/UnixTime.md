---
title: UnixTime
---

`UnixTime[]` gives the total number of seconds since January 1, 1970, in the GMT time zone. `UnixTime[date]` converts a date to Unix timestamp.

## Examples

Get the current Unix timestamp:

```wolfram
UnixTime[]
(* 1736951445 *)
```

Convert a date to Unix time:

```wolfram
UnixTime[{2024, 1, 1, 0, 0, 0}]
(* 1704067200 *)
```

Convert a DateObject:

```wolfram
UnixTime[DateObject[{2000, 1, 1}]]
(* 946684800 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UnixTime.html) for more details.*