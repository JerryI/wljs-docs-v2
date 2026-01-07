---
title: MorphologicalEulerNumber
---

`MorphologicalEulerNumber[image]` computes the morphological Euler number of regions in a binary image.

- `MorphologicalEulerNumber[image, t]` treats values above t as foreground.

The Euler number is the number of objects minus the number of holes.

## Examples

```wolfram
MorphologicalEulerNumber[binaryImage]
```

```wolfram
MorphologicalEulerNumber[image, 0.5]
```

```wolfram
MorphologicalEulerNumber[Binarize[img]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalEulerNumber.html) for more details.*