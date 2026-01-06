# GraphLayerStyle

`GraphLayerStyle` is an option for `LayeredGraphPlot3D` and related functions that specifies the style in which to draw a layer on the plot.

## Examples

```wolfram
LayeredGraphPlot3D[CompleteGraph[5], GraphLayers -> All, GraphLayerStyle -> Opacity[0.3]]
```

```wolfram
LayeredGraphPlot3D[TreeGraph[{1 -> 2, 1 -> 3, 2 -> 4}], GraphLayerStyle -> {Blue, Red, Green}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphLayerStyle.html) for more details.*