# GraphDisjointUnion

`GraphDisjointUnion[g1, g2]` gives the disjoint union of graphs g1 and g2 (vertices and edges from both, kept separate).

## Examples

Disjoint union:

```wolfram
GraphDisjointUnion[CycleGraph[3], CycleGraph[4]]
(* Graph with 7 vertices, two separate components *)
```

Multiple graphs:

```wolfram
GraphDisjointUnion[PathGraph[{1, 2}], PathGraph[{3, 4}], PathGraph[{5, 6}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphDisjointUnion.html) for more details.*