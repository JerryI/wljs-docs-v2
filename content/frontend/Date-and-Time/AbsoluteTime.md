---
title: AbsoluteTime
---

`AbsoluteTime[]` gives the total number of seconds since the beginning of January 1, 1900, in your time zone.

`AbsoluteTime[date]` gives the absolute time specification corresponding to the given date specification.

## Examples

Get the current absolute time:

```wolfram
AbsoluteTime[]
(* 3.94...*10^9 - a large number *)
```

Convert a date to absolute time:

```wolfram
AbsoluteTime[{2000, 1, 1}]
(* 3155673600 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteTime.html) for more details.