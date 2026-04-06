---
title: ImageFileApply
---

`ImageFileApply[f, inputfile, outputfile]` applies the function f to the list of channel values for each pixel of the image stored in inputfile and stores the result in outputfile.

## Examples

Invert an image file:

```wolfram
ImageFileApply[1 - # &, "input.png", "output.png"]
```

Apply a grayscale transformation:

```wolfram
ImageFileApply[Mean, "color.png", "gray.png"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFileApply.html) for more details.