# FindHamiltonianPath

`FindHamiltonianPath[g]` finds a Hamiltonian path in the graph g with the smallest total length.

`FindHamiltonianPath[g,s,t]` finds a Hamiltonian path with the smallest total length from s to t.

## Examples

```wolfram
(* Find a Hamiltonian path *)
g = CompleteGraph[5];
FindHamiltonianPath[g]

(* Find path between specific vertices *)
FindHamiltonianPath[g, 1, 5]

(* Visualize the path *)
path = FindHamiltonianPath[g];
HighlightGraph[g, PathGraph[path]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindHamiltonianPath.html) for more details.*