---
title: FrameTicksStyle
---

`FrameTicksStyle` is an option for 2D graphics functions that specifies how frame ticks should be rendered.

## Examples

Style frame ticks with a specific color:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Frame -> True, FrameTicksStyle -> Red]
```

Use different styles for different sides:

```wolfram
Plot[x^2, {x, -2, 2}, Frame -> True, 
  FrameTicksStyle -> {{Blue, Red}, {Green, Orange}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrameTicksStyle.html) for more details.*