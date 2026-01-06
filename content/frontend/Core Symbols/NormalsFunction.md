# NormalsFunction

`NormalsFunction` is an option for `Plot3D` and related functions that specifies a function to apply to determine the effective surface normals at every point.

## Examples

```wolfram
Plot3D[Sin[x y], {x, 0, 3}, {y, 0, 3}, NormalsFunction -> Automatic]
```

```wolfram
Plot3D[x^2 + y^2, {x, -1, 1}, {y, -1, 1}, NormalsFunction -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NormalsFunction.html) for more details.*