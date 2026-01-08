---
title: Pattern
---

`sym:obj` or `Pattern[sym, obj]` represents the pattern object obj, assigned the name sym.

## Examples

Named pattern:

```wolfram
f[x_Integer] := x^2
f[5]
(* 25 *)
```

Pattern with condition:

```wolfram
g[x:_?Positive] := Sqrt[x]
g[4]
(* 2 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pattern.html) for more details.