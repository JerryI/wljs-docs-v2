# GrammarToken

`GrammarToken[form]` is a grammar rules pattern object that represents any input of the specified form.

## Examples

```wolfram
GrammarRules[{GrammarToken["Number"] -> n}]
```

```wolfram
GrammarApply[GrammarRules[{GrammarToken["Color"]}], "red"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GrammarToken.html) for more details.*