# GraphTree

`GraphTree[g]` constructs a tree from the tree graph `g`.

- `GraphTree[g, root]` specifies what vertex to use as the root.
- `GraphTree[g, root, h]` applies `h` to each vertex to get the corresponding data and ordering of subtrees.

## Examples

```wolfram
GraphTree[TreeGraph[{1 -> 2, 1 -> 3, 2 -> 4, 2 -> 5}]]
```

```wolfram
GraphTree[TreeGraph[{a -> b, a -> c, b -> d}], a]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphTree.html) for more details.*