---
title: AnatomyPlot3D
---

`AnatomyPlot3D[primitives, options]` represents a three-dimensional graphical image that works with anatomical entities as well as standard 3D graphics primitives and directives.

## Examples

Display an anatomical structure:

```wolfram
AnatomyPlot3D[Entity["AnatomicalStructure", "Heart"]]
```

Combine with graphics primitives:

```wolfram
AnatomyPlot3D[{Entity["AnatomicalStructure", "Heart"], Sphere[{0, 0, 0}, 10]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnatomyPlot3D.html) for more details.*