---
title: SierpinskiCurve
---

`SierpinskiCurve[n]` gives the line segments representing the nth-step Sierpiński curve.

## Examples

First few iterations:

```wolfram
Graphics[SierpinskiCurve[3]]
```

Higher resolution:

```wolfram
Graphics[SierpinskiCurve[5], AspectRatio -> Automatic]
```

Animate the curve development:

```wolfram
Table[Graphics[SierpinskiCurve[n]], {n, 1, 6}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SierpinskiCurve.html) for more details.*