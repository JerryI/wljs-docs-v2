# SpanSymmetric

`SpanSymmetric` is an option for selections that specifies whether vertically expandable characters are symmetric about the axis of the selection.

This option affects the rendering of extensible characters like brackets and braces.

## Examples

```wolfram
Style[expr, SpanSymmetric -> True]
```

```wolfram
Cell[BoxData[...], SpanSymmetric -> False]
```

```wolfram
(* Make brackets expand symmetrically *)
DisplayForm[RowBox[{"{", expr, "}"}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpanSymmetric.html) for more details.*