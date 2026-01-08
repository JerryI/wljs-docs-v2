---
title: TimeObject
---

`TimeObject[]` represents the current time.

`TimeObject[{h, m, s}]` represents a time object of standard normalized form.

`TimeObject[date]` gives the time component of the specified date representation.

`TimeObject[rtime, gran]` gives the time object of granularity gran that includes the reference time rtime.

## Examples

Current time:

```wolfram
TimeObject[]
(* TimeObject[{14, 30, 45.123}] *)
```

Specific time:

```wolfram
TimeObject[{10, 30, 0}]
(* TimeObject[{10, 30, 0}] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeObject.html) for more details.