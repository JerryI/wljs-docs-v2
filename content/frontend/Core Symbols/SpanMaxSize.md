# SpanMaxSize

`SpanMaxSize` is an option for selections that specifies the maximum size of spanning characters such as parentheses and brackets.

## Examples

Limit the size of spanning brackets:
```wolfram
Style[HoldForm[(a + b)/(c + d)], SpanMaxSize -> 2]
```

Set span max size for a cell:
```wolfram
Cell[BoxData[...], SpanMaxSize -> 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpanMaxSize.html) for more details.*