# RootTree

`RootTree[tree]` returns the root node of tree as a `Tree` object.

- `RootTree[tree, n]` returns a `Tree` object containing the nodes of tree down to level n.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
RootTree[tree, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RootTree.html) for more details.*