# IntervalMemberQ

`IntervalMemberQ[interval, x]` gives `True` if x lies within the interval, and `False` otherwise.

`IntervalMemberQ[interval1, interval2]` gives `True` if interval2 is completely contained in interval1.

## Examples

Check membership:

```wolfram
IntervalMemberQ[Interval[{0, 10}], 5]
(* True *)
```

```wolfram
IntervalMemberQ[Interval[{0, 10}], 15]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IntervalMemberQ.html) for more details.*