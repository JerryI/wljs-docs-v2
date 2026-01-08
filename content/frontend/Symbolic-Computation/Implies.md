---
title: Implies
---

`Implies[p, q]` represents the logical implication p ⇒ q.

## Examples

Basic implication:

```wolfram
Implies[True, False]
(* False *)
```

Symbolic implication:

```wolfram
Implies[a, b] // BooleanConvert
(* !a || b *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Implies.html) for more details.