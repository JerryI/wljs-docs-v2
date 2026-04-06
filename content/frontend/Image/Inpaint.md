---
title: Inpaint
---

`Inpaint[image, region]` retouches parts of image that correspond to nonzero elements in region.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
mask = DiskMatrix[20];
Inpaint[img, mask]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inpaint.html) for more details.