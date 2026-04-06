---
title: TemplateSlot
---

`TemplateSlot[n]` represents a template slot to be filled from the nth argument when the template is applied.

`TemplateSlot[name]` represents a template slot to be filled from an element with key name in an association appearing in the first argument.

## Examples

Create a template with numbered slots:

```wolfram
TemplateApply[StringTemplate["Hello, `1`!"], {"World"}]
(* "Hello, World!" *)
```

Use named slots:

```wolfram
TemplateApply[StringTemplate["Hello, `name`!"], <|"name" -> "Alice"|>]
(* "Hello, Alice!" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateSlot.html) for more details.