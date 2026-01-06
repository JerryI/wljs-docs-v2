# IndependentEdgeSetQ

`IndependentEdgeSetQ[g, elist]` yields `True` if the edge list elist is an independent edge set of the graph g, and `False` otherwise.

## Examples

```wolfram
IndependentEdgeSetQ[CompleteGraph[4], {1 <-> 2, 3 <-> 4}]
```

```wolfram
IndependentEdgeSetQ[CycleGraph[5], {1 <-> 2, 2 <-> 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IndependentEdgeSetQ.html) for more details.*