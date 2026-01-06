---
title: Extract
---

`Extract[expr, pos]` extracts the part of expr at the position specified by pos. `Extract[expr, {pos1, pos2, ...}]` extracts multiple parts.

## Examples

Extract a part by position:

```wolfram
Extract[{{a, b}, {c, d}}, {2, 1}]
(* c *)
```

Extract multiple parts:

```wolfram
Extract[{a, b, c, d}, {{1}, {3}}]
(* {a, c} *)
```

Useful with Position:

```wolfram
Extract[{1, 2, 3, 2}, Position[{1, 2, 3, 2}, 2]]
(* {2, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Extract.html) for more details.*