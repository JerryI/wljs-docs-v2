---
title: TemplateWith
---

`TemplateWith["name" -> value, expr]` represents an element of a template object that evaluates expr after replacing `TemplateSlot["name"]` with value.

- `TemplateWith[{name1 -> value1, name2 -> value2, ...}, expr]` evaluates expr with a list of key-value pairs.

## Examples

```wolfram
TemplateApply[TemplateWith["x" -> 5, TemplateSlot["x"]^2]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateWith.html) for more details.