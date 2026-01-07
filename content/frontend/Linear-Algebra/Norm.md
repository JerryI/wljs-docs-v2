---
title: Norm
---

`Norm[v]` gives the Euclidean norm (length) of a vector. `Norm[v, p]` gives the $p$-norm.

## Examples

Compute norms:

```wolfram
Norm[{3, 4}]
(* 5 *)

Norm[{1, 2, 3}]
(* Sqrt[14] *)

(* 1-norm (Manhattan distance) *)
Norm[{1, -2, 3}, 1]
(* 6 *)

(* Infinity norm *)
Norm[{1, -5, 3}, Infinity]
(* 5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Norm.html) for more details.*