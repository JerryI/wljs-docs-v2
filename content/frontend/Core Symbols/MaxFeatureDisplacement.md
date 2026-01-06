# MaxFeatureDisplacement

`MaxFeatureDisplacement` is an option that specifies the maximum displacement allowed for any feature.

## Examples

With ImageCorrespondingPoints:

```wolfram
img1 = ExampleData[{"TestImage", "Lena"}];
img2 = ImageRotate[img1, 0.1];
ImageCorrespondingPoints[img1, img2, MaxFeatureDisplacement -> 50]
```

Limit displacement in tracking:

```wolfram
Options[ImageCorrespondingPoints]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxFeatureDisplacement.html) for more details.*