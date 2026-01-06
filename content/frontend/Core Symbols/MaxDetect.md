# MaxDetect

`MaxDetect[image]` gives a binary image in which white pixels correspond to constant extended maxima in image.

- `MaxDetect[image, h]` finds extended maxima where the range of values is not greater than h.
- `MaxDetect[data, ...]` applies maxima detection to an array of data.

## Examples

```wolfram
MaxDetect[ExampleData[{"TestImage", "Lena"}]]
```

```wolfram
MaxDetect[image, 0.1]
```

```wolfram
MaxDetect[GaussianFilter[img, 5]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxDetect.html) for more details.*