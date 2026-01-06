# EdgeShapeFunction

`EdgeShapeFunction` is an option and annotation for `Graph` and related functions that specifies a function to use to generate primitives for rendering each edge.

## Examples

Custom edge rendering:

```wolfram
Graph[{1 -> 2, 2 -> 3}, 
  EdgeShapeFunction -> "CurvedArc"]
```

Named edge shapes:

```wolfram
Graph[CycleGraph[5], EdgeShapeFunction -> "Line"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeShapeFunction.html) for more details.*