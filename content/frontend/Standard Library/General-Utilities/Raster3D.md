# Raster3D

`Raster3D[{{{a11, a12, …}, …}, …}]` is a three-dimensional graphics primitive that represents a cubical array of gray cells.

`Raster3D[{{{{r11, g11, b11}, …}, …}, …}]` represents an array of RGB color cells.

## Examples

3D voxel array:

```wolfram
Graphics3D[Raster3D[Table[i + j + k, {i, 5}, {j, 5}, {k, 5}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Raster3D.html) for more details.*