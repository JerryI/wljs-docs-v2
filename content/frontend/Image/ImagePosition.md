---
title: ImagePosition
---

`ImagePosition[image]` gives an association of image positions for each identified category of objects in image.

- `ImagePosition[image, obj]` gives a list of image positions for subimages identified as instances of the specified category.
- `ImagePosition[video, ...]` gives a time series of detected object positions in frames of video.

## Examples

Find face positions:

```wolfram
img = ExampleData[{"TestImage", "Crowd"}];
ImagePosition[img, "Face"]
```

All detected objects:

```wolfram
ImagePosition[img]
```

Cat positions:

```wolfram
ImagePosition[img, Entity["Concept", "Cat::7x3bv"]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePosition.html) for more details.