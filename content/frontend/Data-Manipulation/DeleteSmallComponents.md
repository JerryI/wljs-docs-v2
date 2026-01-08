---
title: DeleteSmallComponents
---

`DeleteSmallComponents[image]` replaces small connected components in a binary image with background pixels.

`DeleteSmallComponents[m]` replaces positive integers in a label matrix with 0 if their tally is small.

`DeleteSmallComponents[..., n]` replaces components consisting of n or fewer elements.

## Examples

Remove small components from binary image:

```wolfram
img = Binarize[Import["ExampleData/text.png"]]
DeleteSmallComponents[img]
```

Specify minimum size:

```wolfram
DeleteSmallComponents[img, 50]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteSmallComponents.html) for more details.