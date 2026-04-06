---
title: ImageType
---

`ImageType[image]` gives the underlying type of values used for each pixel element in the Image object.

## Examples

Get image type:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageType[img]
(* "Byte" *)
```

Real-valued image:

```wolfram
ImageType[Image[RandomReal[1, {10, 10}]]]
(* "Real32" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageType.html) for more details.