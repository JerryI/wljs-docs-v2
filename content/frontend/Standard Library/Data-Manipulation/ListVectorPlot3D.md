# ListVectorPlot3D

`ListVectorPlot3D[varr]` generates a 3D vector plot from a 3D array of vector field values.

`ListVectorPlot3D[{data1, data2, ...}]` plots data for several vector fields.

## Examples

3D vector plot:

```wolfram
data = Table[{-y, x, z}, {x, -2, 2, 0.5}, {y, -2, 2, 0.5}, {z, -2, 2, 0.5}];
ListVectorPlot3D[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListVectorPlot3D.html) for more details.*