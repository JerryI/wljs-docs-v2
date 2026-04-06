---
title: ImageReflect
---

`ImageReflect[image]` reverses image by top-bottom mirror reflection.

`ImageReflect[image, side]` reflects so the specified side goes to the opposite side.

## Examples

Vertical flip:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageReflect[img]
```

Horizontal flip:

```wolfram
ImageReflect[img, Left]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageReflect.html) for more details.