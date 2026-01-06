# Dendrogram

`Dendrogram[{e1, e2, ...}]` constructs a dendrogram from the hierarchical clustering of the elements e1, e2, ....

`Dendrogram[{e1 -> v1, e2 -> v2, ...}]` represents ei with vi in the constructed dendrogram.

`Dendrogram[data, orientation]` constructs an oriented dendrogram according to orientation.

`Dendrogram[tree]` constructs the dendrogram corresponding to weighted tree tree.

## Examples

Create a dendrogram from data:

```wolfram
Dendrogram[{{1, 0}, {0, 1}, {1, 1}, {2, 2}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dendrogram.html) for more details.*