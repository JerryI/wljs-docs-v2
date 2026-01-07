---
title: TreeCases
---

`TreeCases[tree, pattern]` gives a list of subtrees of tree with data matching pattern.

- `TreeCases[tree, pattern, levelspec]` gives a list of all subtrees on levels specified by levelspec with data matching the pattern.
- `TreeCases[tree, pattern, levelspec, n]` gives the first n subtrees with data that matches the pattern.
- `TreeCases[pattern]` represents an operator form that can be applied to a tree.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
TreeCases[tree, _Symbol]
```

```wolfram
TreeCases[tree, b | e]
```

```wolfram
TreeCases[tree, _, 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeCases.html) for more details.*