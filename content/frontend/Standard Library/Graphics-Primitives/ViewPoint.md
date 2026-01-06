# ViewPoint

`ViewPoint` is an option for `Graphics3D` and related functions which gives the point in space from which three-dimensional objects are to be viewed.

## Examples

View from above:

```wolfram
Graphics3D[Sphere[], ViewPoint -> {0, 0, 3}]
```

View from the side:

```wolfram
Graphics3D[Cuboid[], ViewPoint -> {3, 0, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ViewPoint.html) for more details.*