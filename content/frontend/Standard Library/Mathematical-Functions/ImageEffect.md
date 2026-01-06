# ImageEffect

`ImageEffect[image, "effect"]` applies the specified image effect to image.

`ImageEffect[image, {"effect", params}]` uses parameters params.

## Examples

Apply blur effect:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageEffect[img, "OilPainting"]
```

With parameters:

```wolfram
ImageEffect[img, {"Posterization", 4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageEffect.html) for more details.*