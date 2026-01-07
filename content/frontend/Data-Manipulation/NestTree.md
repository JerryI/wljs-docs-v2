---
title: NestTree
---

`NestTree[f,tree]` adds children to each leaf of tree, with f[expr] giving the list of data for the new children of a leaf with data expr.

`NestTree[f,tree,n]` successively applies f to the data of each leaf up to level n, adding at most n levels to each leaf.

`NestTree[f,tree,n,h]` additionally applies h to the data of the new subtrees.

`NestTree[f,expr,…]` constructs a tree by nesting f on the tree leaf with data expr.

## Examples

```wolfram
NestTree[{#-1, #+1}&, 0, 2]
(* Creates a tree starting from 0 with two levels *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NestTree.html) for more details.*