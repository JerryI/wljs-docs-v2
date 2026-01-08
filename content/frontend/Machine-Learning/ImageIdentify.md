---
title: ImageIdentify
---

`ImageIdentify[image]` attempts to identify what image is a picture of.

`ImageIdentify[image, category]` restricts identification to objects within the specified category.

## Examples

Identify an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageIdentify[img]
(* Entity["Concept", "Woman::..."] *)
```

Get multiple candidates:

```wolfram
ImageIdentify[img, All, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageIdentify.html) for more details.