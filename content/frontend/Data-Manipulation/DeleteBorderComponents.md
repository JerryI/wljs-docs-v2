---
title: DeleteBorderComponents
---

`DeleteBorderComponents[image]` replaces connected components adjacent to the border in a binary image image with background pixels.

`DeleteBorderComponents[m]` replaces components adjacent to the border in a label matrix m with 0.

## Examples

Remove border-touching components from a binary image:

```wolfram
DeleteBorderComponents[Binarize[img]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteBorderComponents.html) for more details.