---
title: KeySelect
---

`KeySelect[assoc, crit]` selects elements in the association assoc for which crit applied to their keys is `True`.

`KeySelect[crit]` represents an operator form of `KeySelect` that can be applied to an expression.

## Examples

Select keys matching criterion:

```wolfram
KeySelect[<|1 -> "a", 2 -> "b", 3 -> "c"|>, OddQ]
(* <|1 -> "a", 3 -> "c"|> *)
```

Select string keys:

```wolfram
KeySelect[<|"x" -> 1, "y" -> 2, "z" -> 3|>, StringMatchQ[#, "x" | "z"] &]
(* <|"x" -> 1, "z" -> 3|> *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeySelect.html) for more details.