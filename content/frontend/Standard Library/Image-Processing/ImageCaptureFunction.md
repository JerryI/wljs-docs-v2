# ImageCaptureFunction

`ImageCaptureFunction` is an option for `ImageCapture` that specifies the function to apply to images acquired by the imaging device.

## Examples

Capture and process images:

```wolfram
ImageCapture[ImageCaptureFunction -> (EdgeDetect[#] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageCaptureFunction.html) for more details.*