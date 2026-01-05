# DimensionalMeshComponents

`DimensionalMeshComponents[mr]` gives a list {r0,r1,…} of regions such that rd has dimension d for a mesh region mr.

## Examples

Get components of different dimensions:

```wolfram
mesh = BoundaryMeshRegion[{{0,0},{1,0},{1,1},{0,1}}, Line[{1,2,3,4,1}]];
DimensionalMeshComponents[mesh]
```

Extract 1D components:

```wolfram
DimensionalMeshComponents[mesh][[2]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DimensionalMeshComponents.html) for more details.*