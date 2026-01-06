---
title: EdgeDelete
---

`EdgeDelete[g, e]` makes a graph by deleting the edge e from the graph g.

`EdgeDelete[g, {e1, e2, ...}]` deletes a collection of edges from g.

`EdgeDelete[g, patt]` deletes all edges matching the pattern patt.

## Examples

Delete a single edge:

```wolfram
EdgeDelete[CompleteGraph[4], 1 <-> 2]
```

Delete multiple edges:

```wolfram
EdgeDelete[CycleGraph[5], {1 <-> 2, 2 <-> 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeDelete.html) for more details.*