---
title: DirectionalLight
---

`DirectionalLight[col, pt]` is a three-dimensional graphics directive that specifies the directional light of color col from the point pt to the center of the bounding box to use in coloring 3D surfaces.

`DirectionalLight[col, {pt1, pt2}]` uses a directional light along the vector from pt1 to pt2.

## Examples

Add directional lighting:

```wolfram
Graphics3D[{DirectionalLight[White, {1, 1, 1}], Sphere[]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirectionalLight.html) for more details.*