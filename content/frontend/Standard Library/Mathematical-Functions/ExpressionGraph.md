---
title: ExpressionGraph
---

`ExpressionGraph[expr]` gives the tree graph with different levels at different depths.

`ExpressionGraph[expr, n]` gives the tree graph only down to level n.

`ExpressionGraph[expr, n, form]` gives a tree graph in which subexpressions that match form are leaves.

## Examples

Create a graph of an expression:

```wolfram
ExpressionGraph[a + b*c]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExpressionGraph.html) for more details.*