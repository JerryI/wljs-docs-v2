# BottomHatTransform

`BottomHatTransform[image, ker]` gives the morphological bottom-hat transform of image with respect to structuring element ker.

`BottomHatTransform[image, r]` gives the bottom-hat transform with respect to a range-r square.

`BottomHatTransform[data, ...]` applies a bottom-hat transform to an array of data.

## Examples

Apply bottom-hat transform:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
BottomHatTransform[img, 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BottomHatTransform.html) for more details.*