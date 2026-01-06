---
title: Epilog
---

`Epilog` is an option for graphics functions that gives a list of graphics primitives to be rendered after the main part of the graphics is rendered.

## Examples

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Epilog -> {Red, PointSize[Large], Point[{Pi, 0}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Epilog.html) for more details.*