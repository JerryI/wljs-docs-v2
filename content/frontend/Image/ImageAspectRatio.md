---
title: ImageAspectRatio
---

`ImageAspectRatio[image]` gives the ratio of height to width for image.

## Examples

Get aspect ratio:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageAspectRatio[img]
(* 1. *)
```

Compare with dimensions:

```wolfram
ImageDimensions[img]
(* {512, 512} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageAspectRatio.html) for more details.