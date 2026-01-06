# MorphologicalTransform

`MorphologicalTransform[image, f]` applies the function f to the 3×3 neighborhood of each pixel in a binary image image.

- `MorphologicalTransform[image, rule]` applies a morphological transformation specified by a rule number rule.
- `MorphologicalTransform[image, "name"]` uses a named transformation "name".
- `MorphologicalTransform[image, transformation, n]` applies n iterations of transformation on image.

## Examples

Skeletonize an image:

```wolfram
img = Binarize[ExampleData[{"TestImage", "Shapes"}]];
MorphologicalTransform[img, "Skeleton"]
```

Custom transformation:

```wolfram
MorphologicalTransform[img, If[#[[2, 2]] == 1 && Total[#, 2] > 4, 1, 0] &]
```

Multiple iterations:

```wolfram
MorphologicalTransform[img, "Thin", 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalTransform.html) for more details.*