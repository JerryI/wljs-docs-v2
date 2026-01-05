# MergingFunction

`MergingFunction` is an option for functions such as PersistentSymbol that specifies a function to apply to the list of values found.

## Examples

Use MergingFunction with Merge:

```wolfram
Merge[{<|"a" -> 1|>, <|"a" -> 2|>}, Total]
(* <|"a" -> 3|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MergingFunction.html) for more details.*