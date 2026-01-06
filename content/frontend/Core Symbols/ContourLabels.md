# ContourLabels

`ContourLabels` is an option for contour plots that specifies how to label contours.

## Examples

Show labels on contours:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, ContourLabels -> True]
```

Custom contour labels:

```wolfram
ContourPlot[x^2 + y^2, {x, -2, 2}, {y, -2, 2}, 
  ContourLabels -> (Text[#3, {#1, #2}] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContourLabels.html) for more details.*