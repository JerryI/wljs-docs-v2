---
title: TruncatedPolyhedron
---

`TruncatedPolyhedron[poly]` gives the truncated polyhedron of poly by truncating all vertices.

- `TruncatedPolyhedron[poly, l]` truncates the polyhedron poly by a length ratio l at its vertices.

## Examples

```wolfram
TruncatedPolyhedron[PolyhedronData["Cube"]]
```

```wolfram
TruncatedPolyhedron[PolyhedronData["Tetrahedron"], 0.3]
```

```wolfram
Graphics3D[TruncatedPolyhedron[PolyhedronData["Octahedron"]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TruncatedPolyhedron.html) for more details.*