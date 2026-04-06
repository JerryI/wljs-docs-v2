---
title: TreeReplacePart
---

`TreeReplacePart[tree, pos -> new]` gives a tree in which the subtree of tree at the position specified by pos is replaced with new.

- `TreeReplacePart[tree, {pos1 -> new1, pos2 -> new2, ...}]` replaces subtrees at positions specified by posi with newi.
- `TreeReplacePart[tree, {pos1, pos2, ...} -> new]` replaces all subtrees at positions specified by posi with new.
- `TreeReplacePart[tree, {{pos1,1, pos1,2, ...} -> new1, ...}]` replaces subtrees at positions specified by {posi,1, posi,2, ...} with newi.
- `TreeReplacePart[pos -> new]` represents an operator form of `TreeReplacePart` that can be applied to a tree.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], e}];
TreeReplacePart[tree, {1, 2} -> x]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeReplacePart.html) for more details.