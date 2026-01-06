# ImagePerspectiveTransformation

`ImagePerspectiveTransformation[image, m]` applies a linear fractional transform specified by matrix m to pixel positions.

`ImagePerspectiveTransformation[image, tf]` uses a TransformationFunction.

## Examples

Apply perspective transform:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImagePerspectiveTransformation[img, RotationMatrix[0.2]]
```

With size specification:

```wolfram
ImagePerspectiveTransformation[img, ScalingMatrix[{1.5, 1}], {400, 400}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImagePerspectiveTransformation.html) for more details.*