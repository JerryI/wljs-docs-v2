# BeveledPolyhedron

`BeveledPolyhedron[poly]` gives the beveled polyhedron of poly by beveling each edge.

`BeveledPolyhedron[poly, l]` bevels the polyhedron by a length ratio l at its edges.

## Examples

Bevel a cube:

```wolfram
Graphics3D[BeveledPolyhedron[Cube[]]]
```

With custom bevel ratio:

```wolfram
Graphics3D[BeveledPolyhedron[Tetrahedron[], 0.3]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BeveledPolyhedron.html) for more details.*