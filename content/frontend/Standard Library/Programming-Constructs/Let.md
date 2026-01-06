---
title: Let
---

`Let` is a With-like construction that allows recursive assignments, like Let* in Scheme.

## Examples

Use Let for sequential bindings:

```wolfram
Let[{x = 1, y = x + 1, z = y + 1}, {x, y, z}]
(* {1, 2, 3} *)
```

Compare with With (no recursion):

```wolfram
With[{x = 1, y = 2}, x + y]
(* 3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Let.html) for more details.*