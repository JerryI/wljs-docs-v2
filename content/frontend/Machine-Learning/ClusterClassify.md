---
title: ClusterClassify
---

`ClusterClassify[data]` generates a ClassifierFunction[…] by partitioning data into clusters of similar elements.

`ClusterClassify[data,n]` generates a ClassifierFunction[…] with n clusters.

## Examples

Create a classifier from clustered data:

```wolfram
data = {{1, 2}, {1.1, 1.9}, {5, 6}, {5.2, 5.8}};
cf = ClusterClassify[data, 2];
cf[{1, 2}]
(* 1 *)
```

Classify a new point:

```wolfram
cf[{5, 6}]
(* 2 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClusterClassify.html) for more details.