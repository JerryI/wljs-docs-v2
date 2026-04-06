---
title: MorphologicalBranchPoints
---

`MorphologicalBranchPoints[image]` gives a version of a binary image image in which white pixels represent the morphological branch points.

## Examples

```wolfram
img = Thinning[Binarize[ExampleData[{"TestImage", "Lena"}]]];
MorphologicalBranchPoints[img]
```

```wolfram
MorphologicalBranchPoints[SkeletonTransform[DiskMatrix[20]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalBranchPoints.html) for more details.