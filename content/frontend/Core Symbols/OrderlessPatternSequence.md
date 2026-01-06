# OrderlessPatternSequence

`OrderlessPatternSequence[p1, p2, ...]` is a pattern object that represents a sequence of arguments matching p1, p2, ... in any order.

## Examples

Match arguments in any order:

```wolfram
f[a, b, c] /. f[OrderlessPatternSequence[b, a, c]] -> True
(* True *)
```

Use with named patterns:

```wolfram
{1, "x", 2} /. {OrderlessPatternSequence[x_Integer, y_String, z_Integer]} :> {x, y, z}
```

Match subset in any order:

```wolfram
g[1, 2, 3] /. g[OrderlessPatternSequence[2, 1, rest___]] :> {rest}
(* {3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrderlessPatternSequence.html) for more details.*