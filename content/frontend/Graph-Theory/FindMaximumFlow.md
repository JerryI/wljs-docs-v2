---
title: FindMaximumFlow
---

`FindMaximumFlow[g,s,t]` finds the maximum flow between source vertex s and target vertex t in a graph g.

- `FindMaximumFlow[m,s,t]` finds the maximum flow between vertex indices s and t in a graph with edge capacity matrix m.
- `FindMaximumFlow[data,{s1,…},{t1,…}]` finds the maximum flow between multi-sources s1, … and multi-targets t1, ….
- `FindMaximumFlow[data,source,target,"property"]` returns the value of "property".
- `FindMaximumFlow[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find maximum flow in a weighted graph *)
g = Graph[{1 -> 2, 2 -> 3, 1 -> 3}, EdgeWeight -> {5, 3, 2}];
FindMaximumFlow[g, 1, 3]

(* Get the flow graph *)
FindMaximumFlow[g, 1, 3, "FlowGraph"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMaximumFlow.html) for more details.