# VertexLabels

`VertexLabels` is an option and annotation for `Graph` and related functions that specifies what labels and label positions should be used for vertices.

## Examples

Show vertex names:

```wolfram
Graph[{1 -> 2, 2 -> 3}, VertexLabels -> "Name"]
```

Custom labels:

```wolfram
Graph[{a -> b, b -> c}, VertexLabels -> {a -> "Start", c -> "End"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexLabels.html) for more details.*