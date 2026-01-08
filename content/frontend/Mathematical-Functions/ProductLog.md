---
title: ProductLog
---

`ProductLog[z]` gives the principal solution for w in z = w*e^w (Lambert W function).

`ProductLog[k, z]` gives the kth solution.

## Examples

Principal branch:

```wolfram
ProductLog[1]
(* 0.567143 *)
```

Verify solution:

```wolfram
w = ProductLog[1];
w Exp[w]
(* 1. *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProductLog.html) for more details.