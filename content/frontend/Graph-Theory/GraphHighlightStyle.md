---
title: GraphHighlightStyle
---

`GraphHighlightStyle` is an option to `Graph` and related objects that specifies styles to use for highlighted graph elements.

## Examples

```wolfram
Graph[{1 <-> 2, 2 <-> 3, 3 <-> 1}, GraphHighlight -> {1}, GraphHighlightStyle -> Red]
```

```wolfram
Graph[CompleteGraph[5], GraphHighlight -> {1, 2}, GraphHighlightStyle -> {VertexStyle -> Orange}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphHighlightStyle.html) for more details.*