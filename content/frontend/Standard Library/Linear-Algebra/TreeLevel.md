# TreeLevel

`TreeLevel[tree, levelspec]` gives a list of all subtrees of tree on levels specified by levelspec.

- `TreeLevel[tree, levelspec -> elem]` gives a list of the element elem of subtrees on levels specified by levelspec.
- `TreeLevel[levelspec]` represents an operator form of `TreeLevel` that can be applied to a tree.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
TreeLevel[tree, {2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeLevel.html) for more details.*