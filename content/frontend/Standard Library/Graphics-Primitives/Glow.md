---
title: Glow
---

`Glow[col]` is a graphics directive which specifies that surfaces of 3D graphics objects that follow are to be taken to glow with color `col`.

- `Glow[]` specifies that there is no glow.

## Examples

```wolfram
Graphics3D[{Glow[Red], Sphere[]}]
```

```wolfram
Graphics3D[{Glow[Yellow], Opacity[0.5], Cuboid[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Glow.html) for more details.*