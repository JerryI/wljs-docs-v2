---
title: Most
---

`Most[list]` gives the list with the last element removed. Equivalent to `Drop[list, -1]`.

## Examples

Remove the last element:

```wolfram
Most[{a, b, c, d}]
(* {a, b, c} *)

Most[Range[10]]
(* {1, 2, 3, 4, 5, 6, 7, 8, 9} *)

(* Combine with Last *)
{Most[{1, 2, 3}], Last[{1, 2, 3}]}
(* {{1, 2}, 3} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Most.html) for more details.