# InsertionFunction

`InsertionFunction` is an option for template functions that specifies how expressions are to be processed before they are inserted when the template is applied.

## Examples

```wolfram
StringTemplate["Hello, `name`!", InsertionFunction -> ToUpperCase][<|"name" -> "world"|>]
```

```wolfram
TemplateApply[StringTemplate["`x`"], <|"x" -> 42|>, InsertionFunction -> ToString]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InsertionFunction.html) for more details.*