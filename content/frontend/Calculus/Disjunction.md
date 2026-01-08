---
title: Disjunction
---

`Disjunction[expr, {a1, a2, ...}]` gives the disjunction of expr over all choices of the Boolean variables ai.

## Examples

Disjunction over Boolean variables:

```wolfram
Disjunction[a && b, {a, b}]
(* a || b *)
```

Expand logical expression:

```wolfram
Disjunction[a || b, {a}]
(* True *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Disjunction.html) for more details.