---
title: Tube
---

`Tube[{{x1, y1, z1}, {x2, y2, z2}, ...}, r]` represents a 3D tube of radius r around a path.

## Examples

Tube along a path:

```wolfram
Graphics3D[Tube[{{0, 0, 0}, {1, 1, 0}, {2, 0, 1}}, 0.1]]
```

Helix tube:

```wolfram
pts = Table[{Cos[t], Sin[t], t/5}, {t, 0, 4 Pi, 0.2}];
Graphics3D[Tube[pts, 0.1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Tube.html) for more details.*