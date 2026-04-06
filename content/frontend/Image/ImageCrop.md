---
title: ImageCrop
---

`ImageCrop[image]` crops image by removing borders of uniform color.

`ImageCrop[image, size]` crops image to the specified size.

## Examples

Automatic crop:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageCrop[img]
```

Crop to specific size:

```wolfram
ImageCrop[img, {200, 200}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCrop.html) for more details.