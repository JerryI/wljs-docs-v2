---
title: GraphIntersection
---

`GraphIntersection[g1, g2]` gives the graph intersection (edges present in both g1 and g2).

## Examples

Intersection of two graphs:

```wolfram
g1 = Graph[{1 <-> 2, 2 <-> 3, 3 <-> 4}]
g2 = Graph[{2 <-> 3, 3 <-> 4, 4 <-> 5}]
GraphIntersection[g1, g2]
(* Graph with edges 2 <-> 3, 3 <-> 4 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphIntersection.html) for more details.*