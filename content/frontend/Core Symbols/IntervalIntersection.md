# IntervalIntersection

`IntervalIntersection[interval1, interval2, ...]` gives the interval of points common to all intervals.

## Examples

Find overlapping region:

```wolfram
IntervalIntersection[Interval[{0, 5}], Interval[{3, 10}]]
(* Interval[{3, 5}] *)
```

Non-overlapping intervals:

```wolfram
IntervalIntersection[Interval[{0, 2}], Interval[{5, 10}]]
(* Interval[] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntervalIntersection.html) for more details.*