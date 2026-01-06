---
title: AbsoluteThickness
---

`AbsoluteThickness[d]` is a graphics directive which specifies that lines which follow are to be drawn with absolute thickness d.

## Examples

Draw a line with absolute thickness:

```wolfram
Graphics[{AbsoluteThickness[5], Line[{{0, 0}, {1, 1}}]}]
```

Compare different thicknesses:

```wolfram
Graphics[{AbsoluteThickness[1], Line[{{0, 0}, {1, 0}}], 
  AbsoluteThickness[3], Line[{{0, 0.5}, {1, 0.5}}], 
  AbsoluteThickness[5], Line[{{0, 1}, {1, 1}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AbsoluteThickness.html) for more details.*