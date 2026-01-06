# Polyhedron

`Polyhedron[{f1, ..., fn}]` represents a filled polyhedron inside the closed surfaces with polygon faces fi.

- `Polyhedron[{f1, ..., fn} -> {{g1, ..., gm}, ...}]` represents a polyhedron with voids.
- `Polyhedron[{poly1, poly2, ...}]` represents a collection of polyhedra.
- `Polyhedron[{p1, ..., pn}, data]` represents a polyhedron with indexed coordinates.

## Examples

```wolfram
Graphics3D[Polyhedron[PolyhedronData["Cube", "Faces"]]]
```

```wolfram
Polyhedron[{{0, 0, 0}, {1, 0, 0}, {0.5, 1, 0}, {0.5, 0.5, 1}}, 
  {{1, 2, 3}, {1, 2, 4}, {2, 3, 4}, {3, 1, 4}}]
```

```wolfram
Graphics3D[{Red, Polyhedron[tetrahedronFaces]}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Polyhedron.html) for more details.*