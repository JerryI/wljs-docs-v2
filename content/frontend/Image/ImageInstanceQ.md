---
title: ImageInstanceQ
---

`ImageInstanceQ[image, obj]` gives `True` if image appears to be an instance of the object obj, and gives `False` otherwise.

- `ImageInstanceQ[image, obj, cat]` assumes that the image is of something in the category cat.

## Examples

Check if an image contains a specific object:

```wolfram
img = ExampleData[{"TestImage", "Airplane"}];
ImageInstanceQ[img, Entity["Concept", "Airplane::9v278"]]
```

Check with a category hint:

```wolfram
ImageInstanceQ[img, Entity["Concept", "Airplane::9v278"], "Vehicle"]
```

Test for a different object:

```wolfram
ImageInstanceQ[img, Entity["Concept", "Cat::7865n"]]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageInstanceQ.html) for more details.