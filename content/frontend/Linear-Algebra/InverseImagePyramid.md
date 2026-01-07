---
title: InverseImagePyramid
---

`InverseImagePyramid[pyr]` reconstructs an image from an `ImagePyramid` object pyr.

- `InverseImagePyramid[pyr, pyrtype]` assumes the specified pyramid type.
- `InverseImagePyramid[pyr, pyrtype, n]` reconstructs up to pyramid level n.
- `InverseImagePyramid[pyr, pyrtype, {size}]` reconstructs up to the smallest level larger than size.

## Examples

```wolfram
pyr = ImagePyramid[image, "Laplacian"];
InverseImagePyramid[pyr]
```

```wolfram
InverseImagePyramid[pyramid, "Gaussian", 3]
```

```wolfram
InverseImagePyramid[pyr, "Laplacian", {256, 256}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseImagePyramid.html) for more details.*