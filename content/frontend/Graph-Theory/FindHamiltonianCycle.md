---
title: FindHamiltonianCycle
---

`FindHamiltonianCycle[g]` finds a Hamiltonian cycle in the graph g.

- `FindHamiltonianCycle[g,k]` finds at most k Hamiltonian cycles.
- `FindHamiltonianCycle[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

```wolfram
(* Find a Hamiltonian cycle *)
g = CompleteGraph[5];
FindHamiltonianCycle[g]

(* Find multiple Hamiltonian cycles *)
FindHamiltonianCycle[g, 3]

(* Check if cycle exists first *)
HamiltonianGraphQ[g]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindHamiltonianCycle.html) for more details.