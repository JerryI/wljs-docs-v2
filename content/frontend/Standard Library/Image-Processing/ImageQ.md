---
title: ImageQ
---

`ImageQ[image]` yields `True` if image has the form of a valid Image or Image3D object, and `False` otherwise.

## Examples

Test for valid image:

```wolfram
ImageQ[ExampleData[{"TestImage", "Lena"}]]
(* True *)
```

Non-image returns False:

```wolfram
ImageQ[{1, 2, 3}]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageQ.html) for more details.*