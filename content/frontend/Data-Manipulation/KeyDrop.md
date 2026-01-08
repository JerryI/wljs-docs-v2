---
title: KeyDrop
---

`KeyDrop[assoc, {key1, key2, ...}]` yields an association from which elements with keys key_i have been dropped.

`KeyDrop[{assoc1, assoc2, ...}, keys]` gives a list of associations.

`KeyDrop[keys]` represents an operator form of `KeyDrop` that can be applied to an expression.

## Examples

Drop keys from an association:

```wolfram
KeyDrop[<|"a" -> 1, "b" -> 2, "c" -> 3|>, {"a", "c"}]
(* <|"b" -> 2|> *)
```

Operator form:

```wolfram
KeyDrop[{"b"}][<|"a" -> 1, "b" -> 2|>]
(* <|"a" -> 1|> *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyDrop.html) for more details.