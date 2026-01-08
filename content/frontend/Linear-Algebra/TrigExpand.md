---
title: TrigExpand
---

`TrigExpand[expr]` expands out trigonometric functions in expr.

## Examples

Expand a double angle:

```wolfram
TrigExpand[Sin[2x]]
(* 2 Cos[x] Sin[x] *)
```

Expand a sum:

```wolfram
TrigExpand[Cos[a + b]]
(* Cos[a] Cos[b] - Sin[a] Sin[b] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrigExpand.html) for more details.