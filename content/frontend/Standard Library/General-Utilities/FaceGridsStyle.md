# FaceGridsStyle

`FaceGridsStyle` is an option for 3D graphics functions that specifies how face grids should be rendered.

## Examples

```wolfram
(* Style the face grids *)
Graphics3D[Sphere[], FaceGrids -> All, FaceGridsStyle -> Directive[Gray, Dashed]]

(* Use a different color *)
Graphics3D[Cuboid[], FaceGrids -> All, FaceGridsStyle -> LightBlue]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FaceGridsStyle.html) for more details.*