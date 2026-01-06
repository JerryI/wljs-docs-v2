---
title: ClusteringTree
---

`ClusteringTree[{e1, e2, ...}]` constructs a weighted tree from the hierarchical clustering of the elements e1, e2, ....

`ClusteringTree[{e1 -> v1, e2 -> v2, ...}]` represents ei with vi in the constructed graph.

`ClusteringTree[data, h]` constructs a weighted tree by joining subclusters at distance less than h.

## Examples

Create a clustering tree:

```wolfram
ClusteringTree[{{1, 0}, {0, 1}, {1, 1}, {2, 2}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClusteringTree.html) for more details.*