# VoronoiMesh

`VoronoiMesh[{p1, ..., pn}]` gives a MeshRegion representing the Voronoi mesh from the points p1, p2, ....

- `VoronoiMesh[{p1, ..., pn}, {{xmin, xmax}, ...}]` clips the mesh to the bounds [xmin, xmax]×....

## Examples

Create a Voronoi mesh from random points:

```wolfram
VoronoiMesh[RandomReal[1, {10, 2}]]
```

Clip the mesh to a specific region:

```wolfram
VoronoiMesh[RandomReal[1, {20, 2}], {{0, 1}, {0, 1}}]
```

Highlight the mesh cells:

```wolfram
mesh = VoronoiMesh[RandomReal[1, {15, 2}]];
HighlightMesh[mesh, Style[2, RandomColor[]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VoronoiMesh.html) for more details.*