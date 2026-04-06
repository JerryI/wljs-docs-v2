---
title: TreeExtract
---

`TreeExtract[tree,pos]` extracts the subtree of tree at the position specified by pos.

`TreeExtract[tree,{pos1,pos2,...}]` extracts a list of subtrees of tree.

`TreeExtract[tree,pos,h]` extracts subtrees of tree, applying h to each subtree.

`TreeExtract[pos]` represents an operator form of TreeExtract that can be applied to a tree.

## Examples

```wolfram
tree = Tree[a, {Tree[b, {c, d}], Tree[e, {f}]}];
TreeExtract[tree, {1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeExtract.html) for more details.