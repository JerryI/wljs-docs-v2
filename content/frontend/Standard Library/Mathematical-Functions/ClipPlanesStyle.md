# ClipPlanesStyle

`ClipPlanesStyle` is an option to `Graphics3D` that specifies how clipping planes defined with the `ClipPlanes` option should be rendered.

## Examples

Style clipping planes:

```wolfram
Graphics3D[Sphere[], ClipPlanes -> {{{1, 0, 0}, 0}}, ClipPlanesStyle -> Opacity[0.5]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClipPlanesStyle.html) for more details.*