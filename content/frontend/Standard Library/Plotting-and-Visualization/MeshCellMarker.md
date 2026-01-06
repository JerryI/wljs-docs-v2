# MeshCellMarker

`MeshCellMarker` is an option to `MeshRegion` and `BoundaryMeshRegion` that specifies integer markers to associate with mesh cells.

This is useful for distinguishing different parts of a mesh.

## Examples

```wolfram
MeshRegion[{{0, 0}, {1, 0}, {1, 1}, {0, 1}}, Polygon[{1, 2, 3, 4}], 
  MeshCellMarker -> {{2, 1} -> 5}]
```

```wolfram
mesh = MeshRegion[pts, cells, MeshCellMarker -> markers]
```

```wolfram
MeshCellLabel[mesh, 2]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshCellMarker.html) for more details.*