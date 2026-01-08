---
title: XMLTemplate
---

`XMLTemplate["string"]` yields a TemplateObject that represents an XML template to be applied using functions like `TemplateApply`.

- `XMLTemplate[src]` uses File[...], URL[...] as the source for the string template.
- `XMLTemplate[form, args]` yields a TemplateObject with arguments, suitable for cloud deployment or other evaluation.

## Examples

Create and apply an XML template:
```wolfram
template = XMLTemplate["<item><name>`name`</name></item>"];
TemplateApply[template, <|"name" -> "Product"|>]
```

Load template from file:
```wolfram
XMLTemplate[File["template.xml"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/XMLTemplate.html) for more details.