---
title: SpanMinSize
---

`SpanMinSize` is an option for selections that specifies the minimum size of spanning characters such as parentheses and brackets.

## Examples

Set minimum size for spanning brackets:
```wolfram
Style[HoldForm[(a)], SpanMinSize -> 2]
```

Apply to a cell:
```wolfram
Cell[BoxData[...], SpanMinSize -> 1.5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpanMinSize.html) for more details.*