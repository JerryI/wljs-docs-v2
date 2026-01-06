---
title: RepeatedNull
---

`p...` or `RepeatedNull[p]` is a pattern object that represents a sequence of zero or more expressions, each matching p.

`RepeatedNull[p, max]` represents from 0 to max expressions matching p.

`RepeatedNull[p, {min, max}]` represents between min and max expressions matching p.

## Examples

Match zero or more integers:

```wolfram
Cases[{{1, 2}, {a, b}, {}}, {_Integer ...}]
(* {{1, 2}, {}} *)
```

Match up to three elements:

```wolfram
MatchQ[{a, b}, {RepeatedNull[_, 3]}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RepeatedNull.html) for more details.*