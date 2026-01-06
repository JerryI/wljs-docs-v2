# DimensionReduce

`DimensionReduce[{example1,example2,…}]` projects the examples examplei to a lower-dimensional approximating manifold.

`DimensionReduce[examples,n]` projects onto an approximating manifold in n-dimensional space.

## Examples

Reduce high-dimensional data to 2D:

```wolfram
data = RandomReal[1, {100, 10}];
reduced = DimensionReduce[data, 2];
ListPlot[reduced]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DimensionReduce.html) for more details.*