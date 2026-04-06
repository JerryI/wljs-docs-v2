---
title: ImageChannels
---

`ImageChannels[image]` gives the number of channels present in the data for the Image object.

## Examples

RGB image channels:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageChannels[img]
(* 3 *)
```

Grayscale image:

```wolfram
ImageChannels[ColorConvert[img, "Grayscale"]]
(* 1 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageChannels.html) for more details.