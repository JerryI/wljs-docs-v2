# SignedRegionDistance

`SignedRegionDistance[reg,p]` gives the minimum distance from the point p to the region reg if p is outside the region and the minimum distance to the complement of reg if p is inside the region.

`SignedRegionDistance[reg]` gives a `RegionDistanceFunction[…]` that can be applied repeatedly to different points.

## Examples

```wolfram
SignedRegionDistance[Disk[], {0.5, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SignedRegionDistance.html) for more details.*