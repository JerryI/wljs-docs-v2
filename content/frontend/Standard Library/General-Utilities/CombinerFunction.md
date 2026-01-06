---
title: CombinerFunction
---

`CombinerFunction` is an option for template functions that specifies how fragments should be assembled to give the result of applying a template.

## Examples

Use StringJoin as combiner:

```wolfram
TemplateApply[StringTemplate["Hello, ``!"], {"World"}, CombinerFunction -> StringJoin]
(* "Hello, World!" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CombinerFunction.html) for more details.*