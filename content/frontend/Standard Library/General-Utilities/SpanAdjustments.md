---
title: SpanAdjustments
---

`SpanAdjustments` is an option for selections that specifies the height and width of spanning characters.

This option controls how characters like brackets, parentheses, and braces are sized when they span multiple lines or expressions.

## Examples

```wolfram
Style[MatrixForm[{{a, b}, {c, d}}], SpanAdjustments -> {{1, 1}, {1, 1}}]
```

```wolfram
Options[StyleBox, SpanAdjustments]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpanAdjustments.html) for more details.*