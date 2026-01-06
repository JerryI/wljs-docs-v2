---
title: TemplateObject
---

`TemplateObject[expr]` represents a template object to be applied using functions like `TemplateApply`.

- `TemplateObject[form, args]` yields a TemplateObject with arguments, suitable for cloud deployment or other evaluation.

## Examples

Create and apply a simple template:
```wolfram
template = TemplateObject["Hello, `name`!"];
TemplateApply[template, <|"name" -> "World"|>]
```

Use a template with slot expressions:
```wolfram
TemplateApply[TemplateObject["`1` + `2` = `3`"], {2, 3, 5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateObject.html) for more details.*