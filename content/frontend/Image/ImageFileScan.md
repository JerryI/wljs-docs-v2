---
title: ImageFileScan
---

`ImageFileScan[f,inputfile]` applies the function f to the list of channel values for each pixel of the image stored in inputfile.

## Examples

Count pixels in an image file:

```wolfram
n = 0; ImageFileScan[(n++ &), "image.png"]; n
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageFileScan.html) for more details.