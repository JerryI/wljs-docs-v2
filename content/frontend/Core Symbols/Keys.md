# Keys

`Keys[assoc]` gives a list of the keys in an association.

`Keys[{key1 -> val1, key2 -> val2, ...}]` gives a list of keys in a list of rules.

## Examples

Get keys from an association:

```wolfram
Keys[<|"a" -> 1, "b" -> 2, "c" -> 3|>]
(* {"a", "b", "c"} *)
```

Get keys from rules:

```wolfram
Keys[{x -> 1, y -> 2}]
(* {x, y} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Keys.html) for more details.*