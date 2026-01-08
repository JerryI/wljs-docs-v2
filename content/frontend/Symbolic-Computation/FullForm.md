---
title: FullForm
---

`FullForm[expr]` prints as the full form of expr, with no special syntax.

## Examples

See full form of expressions:

```wolfram
FullForm[a + b]
(* Plus[a, b] *)

FullForm[a/b]
(* Times[a, Power[b, -1]] *)

FullForm[{1, 2, 3}]
(* List[1, 2, 3] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FullForm.html) for more details.