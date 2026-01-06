# FaceForm

`FaceForm[g]` is a graphics directive specifying that faces of polygons and other filled graphics objects are to be drawn using the directive g.

`FaceForm[g, gback]` specifies different directives for front and back faces of 3D polygons.

## Examples

Set face color:

```wolfram
Graphics3D[{FaceForm[Red], Cuboid[]}]
```

Different front and back:

```wolfram
Graphics3D[{FaceForm[Blue, Yellow], Polygon[{{0, 0, 0}, {1, 0, 0}, {0.5, 1, 0.5}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FaceForm.html) for more details.*