# KirchhoffMatrix

`KirchhoffMatrix[g]` gives the Kirchhoff matrix (Laplacian matrix) of the graph g.

`KirchhoffMatrix[{v -> w, ...}]` uses rules v -> w to specify the graph g.

## Examples

Kirchhoff matrix of a path graph:

```wolfram
KirchhoffMatrix[PathGraph[{1, 2, 3}]] // MatrixForm
```

From edge rules:

```wolfram
KirchhoffMatrix[{1 -> 2, 2 -> 3, 3 -> 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KirchhoffMatrix.html) for more details.*