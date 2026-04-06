---
title: FindThreshold
---

`FindThreshold[image]` finds a global threshold value that partitions the intensity values in image into two intervals.

## Examples

Find an optimal threshold for an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
FindThreshold[img]
```

Use the threshold for binarization:

```wolfram
t = FindThreshold[img];
Binarize[img, t]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindThreshold.html) for more details.