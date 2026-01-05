# StippleShading

`StippleShading[]` is a three-dimensional graphics directive specifying that objects that follow are to be drawn using small dots.

`StippleShading[d]` uses the density d of shading.

`StippleShading[col]` uses dots with the specified color col.

`StippleShading[d, col]` uses dots of color col with the density d of shading.

## Examples

```wolfram
Graphics3D[{StippleShading[], Sphere[]}]
```

```wolfram
Graphics3D[{StippleShading[0.8, Blue], Cuboid[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StippleShading.html) for more details.*