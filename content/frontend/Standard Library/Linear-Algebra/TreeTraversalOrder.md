# TreeTraversalOrder

`TreeTraversalOrder` is an option for `TreeMap` and related functions that specifies the order to visit subtrees.

## Examples

Pre-order traversal:

```wolfram
tree = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
TreeMap[Identity, tree, TreeTraversalOrder -> "DepthFirst"]
```

Breadth-first:

```wolfram
TreeMap[Identity, tree, TreeTraversalOrder -> "BreadthFirst"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeTraversalOrder.html) for more details.*