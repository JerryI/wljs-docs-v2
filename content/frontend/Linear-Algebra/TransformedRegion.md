---
title: TransformedRegion
---

`TransformedRegion[reg, f]` represents the transformed region {f(p)|p∈reg}, where reg is a region and f is a function.

## Examples

Scale a disk:

```wolfram
TransformedRegion[Disk[], 2 # &]
```

Rotate a rectangle:

```wolfram
TransformedRegion[Rectangle[], RotationTransform[Pi/4]]
```

Translate a region:

```wolfram
TransformedRegion[Disk[], TranslationTransform[{1, 1}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransformedRegion.html) for more details.*