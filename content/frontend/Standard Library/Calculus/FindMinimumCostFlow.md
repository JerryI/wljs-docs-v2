# FindMinimumCostFlow

`FindMinimumCostFlow[g,{sd1,sd2,…}]` finds the minimum cost flow in the graph g with sd1, sd2, … vertex supplies or demands.

- `FindMinimumCostFlow[g,s,t]` finds the minimum cost maximum flow between source vertex s and target vertex t in a graph g.
- `FindMinimumCostFlow[g,s,t,d]` finds the minimum cost flow between source s and target t, with the required flow d.
- `FindMinimumCostFlow[m,…]` finds the minimum cost flow in a graph with cost matrix m.
- `FindMinimumCostFlow[data,…,"property"]` returns the value of "property".
- `FindMinimumCostFlow[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find minimum cost flow *)
g = Graph[{1 -> 2, 2 -> 3, 1 -> 3}, 
  EdgeWeight -> {1, 2, 4}, EdgeCapacity -> {5, 3, 2}];
FindMinimumCostFlow[g, 1, 3]

(* Get the cost *)
FindMinimumCostFlow[g, 1, 3, "Cost"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMinimumCostFlow.html) for more details.*