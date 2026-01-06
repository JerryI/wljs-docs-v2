# ClusteringComponents

`ClusteringComponents[array]` gives an array where each element is replaced by an integer index representing its cluster.

`ClusteringComponents[array, n]` finds n clusters.

`ClusteringComponents[image]` finds clusters of pixels with similar values in image.

## Examples

Cluster a list of values:

```wolfram
ClusteringComponents[{1, 1.1, 5, 5.1, 10}]
(* {1, 1, 2, 2, 3} *)
```

Find 2 clusters:

```wolfram
ClusteringComponents[{1, 2, 10, 11, 12}, 2]
(* {1, 1, 2, 2, 2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClusteringComponents.html) for more details.*