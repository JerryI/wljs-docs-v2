# ImageFileFilter

`ImageFileFilter[f, inputfile, r, outputfile]` applies the function f to the range r neighborhood of each pixel in each channel of the image stored in inputfile and stores the result in outputfile.

## Examples

```wolfram
ImageFileFilter[Mean, "input.png", 2, "output.png"]
```

```wolfram
ImageFileFilter[Max, "image.tiff", 3, "filtered.tiff"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFileFilter.html) for more details.*