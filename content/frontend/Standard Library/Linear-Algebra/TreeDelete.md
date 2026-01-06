---
title: TreeDelete
---

`TreeDelete[tree,pos]` deletes the subtree of tree at the position specified by pos.

`TreeDelete[tree,{pos1,pos2,…}]` deletes subtrees at several positions.

`TreeDelete[pos]` represents an operator form of TreeDelete that can be applied to a tree.

## Examples

Delete a subtree at position {1}:

```wolfram
t = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
TreeDelete[t, {1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeDelete.html) for more details.*