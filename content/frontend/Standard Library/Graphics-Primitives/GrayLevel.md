---
title: GrayLevel
---

`GrayLevel[g]` represents a color in the grayscale color space with gray level g (0 = black, 1 = white).

`GrayLevel[g, a]` specifies opacity a.

## Examples

Different gray levels:

```wolfram
Graphics[{GrayLevel[0.3], Disk[{0, 0}], GrayLevel[0.7], Disk[{1, 0}]}]
```

With transparency:

```wolfram
Graphics[{GrayLevel[0.5, 0.5], Disk[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GrayLevel.html) for more details.*