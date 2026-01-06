# ClipPlanes

`ClipPlanes` is an option to `Graphics3D` that specifies a list of clipping planes that can cut away portions of a 3D scene from the resulting view.

## Examples

Use clipping planes in 3D graphics:

```wolfram
Graphics3D[Sphere[], ClipPlanes -> {{{1, 0, 0}, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ClipPlanes.html) for more details.*