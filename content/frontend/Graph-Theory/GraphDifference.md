---
title: GraphDifference
---

`GraphDifference[g1, g2]` gives the graph difference of graphs g1 and g2 (edges in g1 but not in g2).

## Examples

Difference of two graphs:

```wolfram
g1 = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4}]
g2 = Graph[{2 <-> 3}]
GraphDifference[g1, g2]
(* Graph with edges 1 <-> 2, 3 <-> 4 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphDifference.html) for more details.