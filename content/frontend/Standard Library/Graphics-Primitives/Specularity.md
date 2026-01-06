---
title: Specularity
---

`Specularity[s]` is a graphics directive which specifies that surfaces of 3D graphics objects which follow are to be taken to have specularity s.

`Specularity[s, n]` uses specular exponent n.

## Examples

```wolfram
Graphics3D[{Specularity[White, 50], Sphere[]}]
```

```wolfram
Graphics3D[{Specularity[0.5, 10], Red, Sphere[{0, 0, 0}, 1]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Specularity.html) for more details.*