---
title: FindClusters
---

`FindClusters[{e1, e2, ...}]` partitions the elements into clusters of similar elements.

`FindClusters[data, n]` partitions data into n clusters.

## Examples

Cluster numerical data:

```wolfram
FindClusters[{1, 2, 10, 11, 100, 101}]
(* {{1, 2}, {10, 11}, {100, 101}} *)
```

Specify number of clusters:

```wolfram
FindClusters[RandomReal[1, {20, 2}], 3]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindClusters.html) for more details.