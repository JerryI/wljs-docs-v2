---
title: EdgeDetect
---

`EdgeDetect[image]` finds edges in image and returns the result as a binary image.

`EdgeDetect[image, r]` finds edges at the scale of the specified pixel range r.

`EdgeDetect[image, r, t]` uses a threshold t for selecting image edges.

## Examples

Detect edges in an image:

```wolfram
EdgeDetect[ExampleData[{"TestImage", "Lena"}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EdgeDetect.html) for more details.