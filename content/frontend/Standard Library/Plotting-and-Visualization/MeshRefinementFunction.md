---
title: MeshRefinementFunction
---

`MeshRefinementFunction` is an option for `DiscretizeRegion` and related functions that specifies a function to indicate whether mesh cells should be refined or not.

## Examples

```wolfram
DiscretizeRegion[Disk[], MeshRefinementFunction -> Function[{vertices, area}, area > 0.01]]
```

```wolfram
DiscretizeRegion[Rectangle[], MeshRefinementFunction -> (Norm[Mean[#1]] < 0.5 && #2 > 0.01 &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MeshRefinementFunction.html) for more details.*