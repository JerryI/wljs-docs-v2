---
title: MorphologicalGraph
---

`MorphologicalGraph[image]` gives a graph object that represents the connectivity of the morphological branch points and endpoints of the objects in image after applying morphological thinning.

## Examples

```wolfram
img = Binarize[ExampleData[{"TestImage", "Lena"}]];
MorphologicalGraph[img]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalGraph.html) for more details.