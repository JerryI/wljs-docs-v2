---
title: ImageCases
---

`ImageCases[image]` gives an association of lists of subimages for each identified category of objects in image.

- `ImageCases[image, category]` gives a list of subimages identified as an instance of the specified category.
- `ImageCases[image, category -> prop]` gives the specified property prop for each identified subimage.
- `ImageCases[image, {category1, category2, ...}]` gives an association with lists of subimages identified as being instances of each of the categoryi.
- `ImageCases[video, ...]` gives a time series of detected objects in frames of video.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Girl"}];
ImageCases[img, "Face"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCases.html) for more details.*