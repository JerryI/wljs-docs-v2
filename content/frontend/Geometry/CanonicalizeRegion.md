---
title: CanonicalizeRegion
---

`CanonicalizeRegion[reg]` gives a canonical representation of the region reg.

## Examples

Canonicalize a region:

```wolfram
CanonicalizeRegion[Disk[{0, 0}, 1]]
```

Simplify complex region:

```wolfram
CanonicalizeRegion[RegionUnion[Disk[], Rectangle[{0, 0}, {1, 1}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CanonicalizeRegion.html) for more details.*