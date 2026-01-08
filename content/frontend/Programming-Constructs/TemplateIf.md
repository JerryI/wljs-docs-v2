---
title: TemplateIf
---

`TemplateIf[condition, tclause]` represents an element of a template object that inserts tclause if the condition evaluates to True.

`TemplateIf[condition, tclause, fclause]` inserts fclause if the condition does not evaluate to True.

## Examples

```wolfram
TemplateApply[
  StringTemplate["Hello, `name`! `TemplateIf[premium, \"Premium user.\"]"],
  <|"name" -> "Alice", "premium" -> True|>
]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateIf.html) for more details.