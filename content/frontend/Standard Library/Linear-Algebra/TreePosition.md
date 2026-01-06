---
title: TreePosition
---

`TreePosition[tree,pattern]` gives a list of the positions of subtrees of tree whose data matches pattern.

`TreePosition[tree,pattern,levelspec]` finds only matches that appear on levels of tree specified by levelspec.

`TreePosition[tree,pattern,levelspec,n]` gives the positions of the first n matches found.

`TreePosition[pattern]` represents an operator form of TreePosition that can be applied to a tree.

## Examples

Find positions of nodes with data matching a pattern:

```wolfram
t = Tree[a, {Tree[b, {Tree[c, None], Tree[d, None]}], Tree[e, None]}];
TreePosition[t, b]
(* {{1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreePosition.html) for more details.*