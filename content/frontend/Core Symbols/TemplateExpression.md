# TemplateExpression

`TemplateExpression[expr]` represents an expression held until a template is applied, and then evaluated.

## Examples

```wolfram
TemplateApply[
  StringTemplate["Result: `x`"],
  <|"x" -> TemplateExpression[1 + 1]|>
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateExpression.html) for more details.*