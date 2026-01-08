---
title: TreeInsert
---

`TreeInsert[tree, child, pos]` inserts child at the position specified by pos in tree.

- `TreeInsert[tree, child, {pos1, pos2, ...}]` inserts child at several positions.
- `TreeInsert[child, pos]` represents an operator form of TreeInsert that can be applied to a tree.

## Examples

Insert a new child into a tree:

```wolfram
tree = Tree[a, {Tree[b, {}], Tree[c, {}]}];
TreeInsert[tree, Tree[d, {}], {1}]
```

Insert at multiple positions:

```wolfram
TreeInsert[tree, Tree[x, {}], {{1}, {2}}]
```

Using the operator form:

```wolfram
TreeInsert[Tree[new, {}], {2}][tree]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeInsert.html) for more details.