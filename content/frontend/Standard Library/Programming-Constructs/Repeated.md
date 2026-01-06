# Repeated

`p..` or `Repeated[p]` is a pattern object that represents a sequence of one or more expressions, each matching p.

`Repeated[p, max]` represents from 1 to max expressions matching p.

`Repeated[p, {min, max}]` represents between min and max expressions matching p.

## Examples

Match one or more integers:

```wolfram
Cases[{{1, 2}, {a, b}, {3}}, {_Integer ..}]
(* {{1, 2}, {3}} *)
```

Match exactly two elements:

```wolfram
MatchQ[{a, b}, {Repeated[_, {2}]}]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Repeated.html) for more details.*