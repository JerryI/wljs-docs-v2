---
title: TemplateApply
---

`TemplateApply[template]` applies a template, evaluating all template elements it contains.

`TemplateApply[template, args]` applies a template, using args to fill slots in the template.

## Examples

Apply a string template:

```wolfram
TemplateApply[StringTemplate["Hello, `1`!"], {"World"}]
(* "Hello, World!" *)
```

With named arguments:

```wolfram
TemplateApply[StringTemplate["The `item` costs `price`."], 
  <|"item" -> "book", "price" -> "$10"|>]
(* "The book costs $10." *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemplateApply.html) for more details.