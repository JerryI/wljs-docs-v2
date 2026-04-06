---
title: ImageScaled
---

`ImageScaled[{x,y}]` gives the position of a graphical object in terms of coordinates scaled to run from 0 to 1 across the whole image region in each direction.

`ImageScaled[{dx,dy},{x0,y0}]` gives a position obtained by starting at ordinary coordinates {x0,y0}, then moving by an image-scaled offset {dx,dy}.

## Examples

Place text at the center of a graphic:

```wolfram
Graphics[{Circle[], Text["Center", ImageScaled[{0.5, 0.5}]]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageScaled.html) for more details.