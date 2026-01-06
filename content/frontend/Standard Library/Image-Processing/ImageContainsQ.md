---
title: ImageContainsQ
---

`ImageContainsQ[image, category]` returns `True` if an instance of the specified category is detected in image.

- `ImageContainsQ[image, {category1, category2, ...}]` returns `True` if at least one instance of each of the categoryi is detected in image.
- `ImageContainsQ[image, category1 | category2 | ...]` returns `True` if image contains an instance of at least one of categoryi.
- `ImageContainsQ[video, ...]` returns a time series of Boolean values for every frame of video.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Peppers"}];
ImageContainsQ[img, "Vegetable"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageContainsQ.html) for more details.*