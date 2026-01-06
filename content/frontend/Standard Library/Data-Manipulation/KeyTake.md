# KeyTake

`KeyTake[assoc, {key1, key2, ...}]` yields an association containing only the elements with keys key_i.

`KeyTake[{assoc1, assoc2, ...}, keys]` gives a list of associations.

`KeyTake[{key1, key2, ...}]` represents an operator form of `KeyTake` that can be applied to an expression.

## Examples

Take specific keys:

```wolfram
KeyTake[<|"a" -> 1, "b" -> 2, "c" -> 3|>, {"a", "c"}]
(* <|"a" -> 1, "c" -> 3|> *)
```

Operator form:

```wolfram
KeyTake[{"b"}][<|"a" -> 1, "b" -> 2, "c" -> 3|>]
(* <|"b" -> 2|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyTake.html) for more details.*