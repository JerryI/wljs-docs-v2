# HeaderDisplayFunction

`HeaderDisplayFunction` is an option for `Dataset` that specifies a function to apply to headers before displaying them.

## Examples

```wolfram
Dataset[{<|"a" -> 1, "b" -> 2|>}, HeaderDisplayFunction -> (Style[#, Bold] &)]
```

```wolfram
Dataset[{<|"Name" -> "Alice"|>}, HeaderDisplayFunction -> ToUpperCase]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HeaderDisplayFunction.html) for more details.*