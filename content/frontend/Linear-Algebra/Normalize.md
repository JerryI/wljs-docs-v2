---
title: Normalize
---

`Normalize[v]` gives the unit vector in the direction of vector `v`. For complex numbers, returns `z/Abs[z]`.

## Examples

Normalize vectors:

```wolfram
Normalize[{3, 4}]
(* {3/5, 4/5} *)

Normalize[{1, 1, 1}]
(* {1/Sqrt[3], 1/Sqrt[3], 1/Sqrt[3]} *)

(* Verify unit length *)
Norm[Normalize[{1, 2, 3}]]
(* 1 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Normalize.html) for more details.