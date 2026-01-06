# DegreeCentrality

`DegreeCentrality[g]` gives a list of vertex degrees for the vertices in the underlying simple graph of g.

`DegreeCentrality[g, "In"]` gives a list of vertex in-degrees.

`DegreeCentrality[g, "Out"]` gives a list of vertex out-degrees.

## Examples

Compute degree centrality:

```wolfram
g = Graph[{1 <-> 2, 2 <-> 3, 2 <-> 4, 3 <-> 4}];
DegreeCentrality[g]
(* {1, 3, 2, 2} *)
```

For a directed graph:

```wolfram
dg = Graph[{1 -> 2, 2 -> 3, 1 -> 3}];
DegreeCentrality[dg, "Out"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DegreeCentrality.html) for more details.*