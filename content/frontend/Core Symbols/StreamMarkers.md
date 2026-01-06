# StreamMarkers

`StreamMarkers` is an option for `StreamPlot`, `ListStreamPlot` and related functions that specifies what markers to draw at the field points plotted.

## Examples

Default stream markers:

```wolfram
StreamPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}]
```

Arrow markers:

```wolfram
StreamPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, StreamMarkers -> "Arrow"]
```

Custom marker style:

```wolfram
StreamPlot[{y, -x}, {x, -3, 3}, {y, -3, 3}, 
  StreamMarkers -> Graphics[Disk[]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StreamMarkers.html) for more details.*