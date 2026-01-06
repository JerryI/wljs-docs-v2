# FindVertexIndependentPaths

`FindVertexIndependentPaths[g, s, t, k]` finds at most k vertex-independent paths from vertex s to vertex t in the graph g.

- `FindVertexIndependentPaths[{v -> w, ...}, ...]` uses rules v -> w to specify the graph g.

## Examples

Find vertex-independent paths in a graph:

```wolfram
g = CompleteGraph[5];
FindVertexIndependentPaths[g, 1, 5, 3]
```

Highlight the paths:

```wolfram
paths = FindVertexIndependentPaths[g, 1, 5, 3];
HighlightGraph[g, paths]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindVertexIndependentPaths.html) for more details.*