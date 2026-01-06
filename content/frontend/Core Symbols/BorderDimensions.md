# BorderDimensions

`BorderDimensions[image]` gives the pixel width of uniform borders of image in the form {{left, right}, {bottom, top}}.

`BorderDimensions[image, t]` finds borders whose pixels vary by an amount less than t.

## Examples

Find border dimensions:

```wolfram
img = ImagePad[ExampleData[{"TestImage", "Lena"}], 10, White];
BorderDimensions[img]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BorderDimensions.html) for more details.*