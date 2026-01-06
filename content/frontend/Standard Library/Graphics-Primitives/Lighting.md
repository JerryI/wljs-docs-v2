---
title: Lighting
---

`Lighting` is an option for `Graphics3D` and related functions that specifies what simulated lighting to use in coloring 3D surfaces.

## Examples

Use neutral lighting:

```wolfram
Graphics3D[Sphere[], Lighting -> "Neutral"]
```

Custom directional light:

```wolfram
Graphics3D[Sphere[], Lighting -> {{"Directional", White, {{5, 5, 4}, {0, 0, 0}}}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Lighting.html) for more details.*