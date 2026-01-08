---
title: BoundaryDiscretizeRegion
---

`BoundaryDiscretizeRegion[reg]` discretizes the region reg into a BoundaryMeshRegion.

`BoundaryDiscretizeRegion[reg, {{xmin, xmax}, ...}]` restricts to the specified bounds.

## Examples

Discretize a disk:

```wolfram
BoundaryDiscretizeRegion[Disk[]]
```

With bounds:

```wolfram
BoundaryDiscretizeRegion[Ball[], {{-1, 1}, {-1, 1}, {-1, 1}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BoundaryDiscretizeRegion.html) for more details.