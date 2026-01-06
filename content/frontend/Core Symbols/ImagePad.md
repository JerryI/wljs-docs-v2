# ImagePad

`ImagePad[image, m]` pads image on all sides with m background pixels.

`ImagePad[image, m, padding]` uses the specified padding value or method.

## Examples

Add black padding:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImagePad[img, 20]
```

Add white padding:

```wolfram
ImagePad[img, 20, White]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePad.html) for more details.*