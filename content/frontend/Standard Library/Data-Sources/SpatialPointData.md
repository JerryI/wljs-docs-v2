# SpatialPointData

`SpatialPointData[points]` represents a collection of spatial locations points.

`SpatialPointData[points,reg]` represents a collection of points within the region reg.

`SpatialPointData[points->vals,…]` associates the values vals with the location points.

`SpatialPointData[points-><|key1->vals1,…|>,…]` associates the key-value annotations keyi->valsi.

`SpatialPointData[{p1->data1,p2->data2,…},…]` represents the spatial point collection {p1,p2,…} with associated values {data1,data2,…}.

`SpatialPointData[{points1,points2,…},…]` represents multiple collections of spatial points.

`SpatialPointData[{points1->anns1,points2->anns2,…},…]` represents multiple collections of spatial points with annotations.

## Examples

Create a spatial point collection:

```wolfram
SpatialPointData[{{0, 0}, {1, 1}, {2, 0}}]
```

Associate values with points:

```wolfram
SpatialPointData[{{0, 0}, {1, 1}} -> {"A", "B"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpatialPointData.html) for more details.*