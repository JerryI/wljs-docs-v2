---
title: Inverse
---

`Inverse[m]` gives the inverse of a square matrix `m`.

## Examples

Compute matrix inverse:

```wolfram
m = {{1, 2}, {3, 4}}
Inverse[m]
(* {{-2, 1}, {3/2, -1/2}} *)

(* Verify: m . Inverse[m] = Identity *)
m . Inverse[m] // Simplify
(* {{1, 0}, {0, 1}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inverse.html) for more details.