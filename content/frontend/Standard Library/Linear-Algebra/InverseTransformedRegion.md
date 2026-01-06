---
title: InverseTransformedRegion
---

`InverseTransformedRegion[reg, f, n]` represents the inverse transformed region {p ∈ ℝⁿ | f(p) ∈ reg}, where `reg` is a region and `f` is a function.

## Examples

```wolfram
InverseTransformedRegion[Disk[], {#1^2, #2} &, 2]
```

```wolfram
InverseTransformedRegion[Rectangle[], AffineTransform[{{2, 0}, {0, 1}}], 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseTransformedRegion.html) for more details.*