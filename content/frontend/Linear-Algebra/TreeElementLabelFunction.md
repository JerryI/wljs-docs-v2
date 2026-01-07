---
title: TreeElementLabelFunction
---

`TreeElementLabelFunction` is an option for `Tree` and related functions that specifies functions to use to generate subtree element labels.

This option allows custom formatting or transformation of labels displayed on tree elements.

## Examples

```wolfram
Tree[{1, {2, 3}}, TreeElementLabelFunction -> (Style[#, Red] &)]
```

```wolfram
ExpressionTree[a + b*c, TreeElementLabelFunction -> (Framed[#] &)]
```

```wolfram
Tree[{a, {b, c}}, TreeElementLabelFunction -> (ToString[#] &)]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeElementLabelFunction.html) for more details.*