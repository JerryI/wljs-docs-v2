# FindEulerianCycle

`FindEulerianCycle[g]` finds an Eulerian cycle in the graph g.

- `FindEulerianCycle[g,k]` finds at most k Eulerian cycles.
- `FindEulerianCycle[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find an Eulerian cycle in a complete graph *)
g = CompleteGraph[5];
FindEulerianCycle[g]

(* Find multiple Eulerian cycles *)
FindEulerianCycle[g, 3]

(* Check if cycle exists first *)
EulerianGraphQ[g]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindEulerianCycle.html) for more details.*