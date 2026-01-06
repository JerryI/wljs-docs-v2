---
title: BooleanRegion
---

`BooleanRegion[bfunc, {reg1, reg2, ...}]` represents the Boolean combination of regions.

## Examples

Intersection of circles:

```wolfram
c1 = Disk[{0, 0}, 1];
c2 = Disk[{0.5, 0}, 1];
BooleanRegion[And, {c1, c2}]
```

Union:

```wolfram
BooleanRegion[Or, {c1, c2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BooleanRegion.html) for more details.*