# FrameLabel

`FrameLabel` is an option for `Graphics`, `Manipulate`, and related functions that specifies labels to be placed on the edges of a frame.

## Examples

Add frame labels:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, 
  Frame -> True, 
  FrameLabel -> {"x", "sin(x)"}]
```

All four sides:

```wolfram
Plot[Cos[x], {x, 0, 2 Pi}, 
  Frame -> True,
  FrameLabel -> {{"Left", "Right"}, {"Bottom", "Top"}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrameLabel.html) for more details.*