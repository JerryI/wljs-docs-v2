# ImageApplyIndexed

`ImageApplyIndexed[f,image]` applies the function f to the list of channel values for each pixel in image, giving the row and column index of each pixel as a second argument to f.

`ImageApplyIndexed[f,{image1,image2,…}]` applies f to the sequence of corresponding pixel values taken from each imagei, giving the corresponding row and column index of pixels as the last argument to f.

## Examples

Apply a function that uses pixel position:

```wolfram
ImageApplyIndexed[#2[[1]]/100 &, Image[RandomReal[1, {100, 100}]]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageApplyIndexed.html) for more details.*