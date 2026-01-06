---
title: Opacity
---

`Opacity[a]` is a graphics directive that specifies that graphical objects that follow are to be displayed with opacity a.

`Opacity[a, color]` uses the specified color with opacity a.

## Examples

Semi-transparent disks:

```wolfram
Graphics[{Opacity[0.5], Red, Disk[{0, 0}], Blue, Disk[{1, 0}]}]
```

Color with opacity:

```wolfram
Graphics[{Opacity[0.3, Blue], Rectangle[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Opacity.html) for more details.*