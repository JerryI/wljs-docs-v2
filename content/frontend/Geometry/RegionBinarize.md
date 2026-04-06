---
title: RegionBinarize
---

`RegionBinarize[image, marker, d]` gives a binary version of image that includes the foreground pixels of marker and also connected regions whose pixel values are within a distance d.

- `RegionBinarize[image, marker, d, {t1, t2}]` grows regions in marker by adding pixels whose average intensity is also constrained within an interval {t1, t2}.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
marker = Binarize[img, 0.8];
RegionBinarize[img, marker, 0.1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegionBinarize.html) for more details.