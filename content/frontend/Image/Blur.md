---
title: Blur
---

`Blur[image]` gives a blurred version of image.

`Blur[image, r]` gives a version of image blurred over pixel radius r.

## Examples

Apply blur to an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
Blur[img]
```

Stronger blur:

```wolfram
Blur[img, 10]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Blur.html) for more details.