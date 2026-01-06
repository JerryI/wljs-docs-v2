# DelaunayMesh

`DelaunayMesh[{p1, p2, ...}]` gives a MeshRegion representing the Delaunay mesh from the points p1, p2, ....

## Examples

Create a 2D Delaunay triangulation:

```wolfram
pts = RandomReal[1, {20, 2}];
DelaunayMesh[pts]
```

3D Delaunay tetrahedralization:

```wolfram
pts3D = RandomReal[1, {50, 3}];
DelaunayMesh[pts3D]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DelaunayMesh.html) for more details.*