# BooleanGraph

`BooleanGraph[bfunc, g1, ..., gn]` gives the Boolean graph defined by the Boolean function bfunc on the graphs g1, ..., gn.

## Examples

Intersection of two graphs:

```wolfram
g1 = Graph[{1 -> 2, 2 -> 3}];
g2 = Graph[{2 -> 3, 3 -> 4}];
BooleanGraph[And, g1, g2]
```

Union of graphs:

```wolfram
BooleanGraph[Or, g1, g2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanGraph.html) for more details.*