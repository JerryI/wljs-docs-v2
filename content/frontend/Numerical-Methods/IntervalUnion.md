---
title: IntervalUnion
---

`IntervalUnion[interval1, interval2, ...]` gives an interval containing points in any of the intervals.

## Examples

Combine overlapping intervals:

```wolfram
IntervalUnion[Interval[{0, 5}], Interval[{3, 10}]]
(* Interval[{0, 10}] *)
```

Combine disjoint intervals:

```wolfram
IntervalUnion[Interval[{0, 2}], Interval[{5, 10}]]
(* Interval[{0, 2}, {5, 10}] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntervalUnion.html) for more details.