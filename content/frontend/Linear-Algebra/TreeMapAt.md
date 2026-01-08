---
title: TreeMapAt
---

`TreeMapAt[f, tree, pos]` applies f to the data at the position specified by pos in tree.

- `TreeMapAt[f, tree, {pos1, pos2, ...}]` applies f to the data at several positions.
- `TreeMapAt[f, pos]` represents an operator form of TreeMapAt that can be applied to a tree.

This function transforms data at specific positions in a tree structure.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], e}];
TreeMapAt[ToUpperCase, tree, {1}]
```

```wolfram
TreeMapAt[# + 1 &, Tree[1, {Tree[2, {3, 4}], 5}], {1, 1}]
```

```wolfram
TreeMapAt[Style[#, Red] &, {1, 2}][Tree[a, {b, c, d}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeMapAt.html) for more details.