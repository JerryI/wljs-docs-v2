---
title: NonlocalMeansFilter
---

`NonlocalMeansFilter[image,r]` applies a nonlocal means filter to image by comparing a range r neighborhood to its nearby neighborhoods.

`NonlocalMeansFilter[image,r,ns]` assumes an additive noise power value ns for comparing neighborhoods.

`NonlocalMeansFilter[image,r,ns,w]` compares neighborhoods in a range w window.

## Examples

Apply nonlocal means filtering to denoise an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
NonlocalMeansFilter[img, 2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NonlocalMeansFilter.html) for more details.