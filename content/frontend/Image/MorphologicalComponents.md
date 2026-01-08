---
title: MorphologicalComponents
---

`MorphologicalComponents[image]` gives an array in which each pixel of image is replaced by an integer index representing the connected foreground image component in which the pixel lies.

`MorphologicalComponents[image, t]` treats values above t as foreground.

`MorphologicalComponents[video, ...]` computes connected components in frames of video.

## Examples

Find connected components in a binary image:

```wolfram
img = Binarize[ExampleData[{"TestImage", "Blobs"}]];
MorphologicalComponents[img] // Colorize
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MorphologicalComponents.html) for more details.