# SphericalRegion

`SphericalRegion` is an option for three-dimensional graphics functions that specifies whether the final image should be scaled so that a sphere drawn around the three-dimensional bounding box would fit in the display area.

## Examples

Ensure consistent scaling during rotation:

```wolfram
Graphics3D[Cuboid[], SphericalRegion -> True]
(* Graphics3D[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SphericalRegion.html) for more details.*