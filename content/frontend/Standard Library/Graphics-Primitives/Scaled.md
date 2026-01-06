# Scaled

`Scaled[{x, y, ...}]` gives the position of a graphical object in terms of coordinates scaled to run from 0 to 1 across the whole plot range in each direction.

`Scaled[{dx, dy, ...}, {x0, y0, ...}]` gives a position obtained by starting at ordinary coordinates {x0, y0, ...}, then moving by a scaled offset {dx, dy, ...}.

## Examples

Position at the center of the plot:

```wolfram
Graphics[{Point[Scaled[{0.5, 0.5}]]}]
```

Text at scaled position:

```wolfram
Graphics[{Text["Center", Scaled[{0.5, 0.5}]]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Scaled.html) for more details.*