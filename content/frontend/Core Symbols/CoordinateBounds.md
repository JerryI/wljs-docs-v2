# CoordinateBounds

`CoordinateBounds[coords]` gives a list {{xmin, xmax}, {ymin, ymax}, ...} of the bounds in each dimension of the region defined by coords.

`CoordinateBounds[coords, δ]` pads the ranges of coordinates by ±δ in each dimension.

`CoordinateBounds[coords, Scaled[s]]` pads by the scaled amount s in each dimension.

`CoordinateBounds[coords, {p1, p2, ...}]` pads by p1, p2, ... in successive dimensions.

## Examples

Get bounds of a set of points:

```wolfram
CoordinateBounds[{{1, 2}, {3, 4}, {5, 6}}]
(* {{1, 5}, {2, 6}} *)
```

With padding:

```wolfram
CoordinateBounds[{{0, 0}, {1, 1}}, 0.5]
(* {{-0.5, 1.5}, {-0.5, 1.5}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoordinateBounds.html) for more details.*