# Values

`Values[assoc]` gives a list of the values in an association.

`Values[{key1 -> val1, key2 -> val2, ...}]` gives a list of values in a list of rules.

## Examples

Get values from an association:

```wolfram
Values[<|"a" -> 1, "b" -> 2, "c" -> 3|>]
(* {1, 2, 3} *)
```

Get values from rules:

```wolfram
Values[{x -> 1, y -> 2}]
(* {1, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Values.html) for more details.*