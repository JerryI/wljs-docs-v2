# TreeSelect

`TreeSelect[tree, crit]` picks out all subtrees treei of tree for which crit[treei] is True.

- `TreeSelect[tree, crit, n]` picks out the first n subtrees for which crit[treei] is True.
- `TreeSelect[tree, crit, levelspec, n]` picks out subtrees on levels specified by levelspec.
- `TreeSelect[crit]` represents an operator form of TreeSelect that can be applied to a tree.

## Examples

```wolfram
tree = Tree[1, {Tree[2, {3, 4}], Tree[5, {6}]}];
TreeSelect[tree, EvenQ[TreeData[#]] &]
```

```wolfram
TreeSelect[tree, TreeLeafQ, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeSelect.html) for more details.*