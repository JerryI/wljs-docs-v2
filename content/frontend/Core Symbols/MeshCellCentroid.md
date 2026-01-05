# MeshCellCentroid

`MeshCellCentroid` is an annotation of `MeshRegion` and `BoundaryMeshRegion` objects that gives the centroids of mesh cells.

## Examples

Get centroids of cells in a mesh region:

```wolfram
mesh = DelaunayMesh[RandomReal[1, {5, 2}]];
mesh[MeshCellCentroid, 2]
(* {{0.3, 0.4}, {0.5, 0.6}, ...} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshCellCentroid.html) for more details.*