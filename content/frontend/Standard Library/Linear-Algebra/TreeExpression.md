---
title: TreeExpression
---

`TreeExpression[tree]` gives an expression from the structure of the `Tree` object tree.

- `TreeExpression[tree, struct]` gives an expression with data and subtrees of tree interpreted as specified by struct.

## Examples

```wolfram
t = Tree[f, {Tree[a, {}], Tree[b, {}]}];
TreeExpression[t]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeExpression.html) for more details.*