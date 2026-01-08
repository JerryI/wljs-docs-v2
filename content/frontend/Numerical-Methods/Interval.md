---
title: Interval
---

`Interval[{min, max}]` represents the range of values between min and max.

`Interval[{min1, max1}, {min2, max2}, ...]` represents a union of ranges.

## Examples

Create an interval:

```wolfram
Interval[{0, 1}]
(* Interval[{0, 1}] *)
```

Arithmetic with intervals:

```wolfram
Interval[{1, 2}] + Interval[{3, 4}]
(* Interval[{4, 6}] *)
```

Interval containing a function range:

```wolfram
Sin[Interval[{0, Pi}]]
(* Interval[{0, 1}] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interval.html) for more details.