---
title: Position
---

`Position[expr, pattern]` gives a list of the positions at which objects matching pattern appear in expr.

## Examples

Find positions of an element:

```wolfram
Position[{a, b, c, b, a}, b]
(* {{2}, {4}} *)
```

Find positions in nested lists:

```wolfram
Position[{{1, 2}, {3, 1}}, 1]
(* {{1, 1}, {2, 2}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Position.html) for more details.*