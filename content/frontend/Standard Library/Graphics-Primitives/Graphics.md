---
title: Graphics
---

`Graphics[primitives, options]` represents a two-dimensional graphical image.

## Examples

Draw a circle:

```wolfram
Graphics[Circle[]]
```

Draw multiple primitives with styling:

```wolfram
Graphics[{
  Red, Disk[{0, 0}, 1],
  Blue, Rectangle[{1, 0}, {2, 1}]
}]
```

Combine with options:

```wolfram
Graphics[Line[{{0, 0}, {1, 1}, {2, 0}}], Axes -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Graphics.html) for more details.*