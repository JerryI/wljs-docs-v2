# Dispatch

`Dispatch[{lhs1 -> rhs1, lhs2 -> rhs2, ...}]` generates an optimized dispatch table representation of a list of rules for faster rule application.

## Examples

Create dispatch table for faster replacement:

```wolfram
rules = Table[i -> i^2, {i, 1000}];
dispatch = Dispatch[rules];
{5, 10, 100} /. dispatch
(* {25, 100, 10000} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dispatch.html) for more details.*