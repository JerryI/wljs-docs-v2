---
title: Tree
---

`Tree[{subtree1, subtree2, ...}]` represents a tree with a list of child subtrees subtreei.

- `Tree[<|key1 -> subtree1, key2 -> subtree2, ...|>]` specifies children as an association with keys.
- `Tree[data, subtrees]` represents a tree containing data in its root, with children given by subtrees.

## Examples

```wolfram
Tree[a, {Tree[b, {}], Tree[c, {}]}]
```

```wolfram
Tree["root", {Tree["child1", {}], Tree["child2", {}]}]
```

```wolfram
ExpressionTree[a + b * c]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Tree.html) for more details.*