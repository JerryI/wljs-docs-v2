# FaceGrids

`FaceGrids` is an option for three-dimensional graphics functions that specifies grid lines to draw on the faces of the bounding box. 

## Examples

```wolfram
(* Add grids to all faces *)
Graphics3D[Sphere[], FaceGrids -> All]

(* Add grids to specific faces *)
Graphics3D[Cuboid[], FaceGrids -> {{0, 0, 1}}]

(* Customize grid spacing *)
Graphics3D[Sphere[], FaceGrids -> {{{0, 0, -1}, {Range[-1, 1, 0.5], Range[-1, 1, 0.5]}}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FaceGrids.html) for more details.*