# RescalingTransform

`RescalingTransform[{{xmin, xmax}, {ymin, ymax}, ...}, {{xpmin, xpmax}, ...}]` gives a TransformationFunction that rescales the region with coordinate ranges xmin to xmax, etc. to the region with coordinate ranges xpmin to xpmax, etc.

- `RescalingTransform[{{xmin, xmax}, {ymin, ymax}, ...}]` gives a TransformationFunction that rescales to the unit square, cube, etc.

## Examples

Rescale to unit square:
```wolfram
RescalingTransform[{{0, 10}, {0, 20}}]
```

Rescale from one range to another:
```wolfram
transform = RescalingTransform[{{0, 100}}, {{0, 1}}];
transform[{50}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RescalingTransform.html) for more details.*