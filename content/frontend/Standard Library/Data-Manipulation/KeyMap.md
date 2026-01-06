# KeyMap

`KeyMap[f, <|key1 -> val1, key2 -> val2, ...|>]` maps f over the keys in an association, giving <|f[key1] -> val1, f[key2] -> val2, ...|>.

- `KeyMap[f]` represents an operator form of KeyMap that can be applied to an expression.

## Examples

Uppercase keys:

```wolfram
KeyMap[ToUpperCase, <|"a" -> 1, "b" -> 2|>]
(* <|"A" -> 1, "B" -> 2|> *)
```

Transform numeric keys:

```wolfram
KeyMap[# + 10 &, <|1 -> "one", 2 -> "two"|>]
(* <|11 -> "one", 12 -> "two"|> *)
```

Operator form:

```wolfram
KeyMap[ToString] @ <|1 -> a, 2 -> b|>
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyMap.html) for more details.*