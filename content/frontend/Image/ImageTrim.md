---
title: ImageTrim
---

`ImageTrim[image, roi]` gives the smallest subimage that includes the specified region of interest roi.

`ImageTrim[image, roi, r]` adds a margin of size r.

## Examples

Trim to bounding box:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageTrim[img, Rectangle[{100, 100}, {300, 300}]]
```

With margin:

```wolfram
ImageTrim[img, Disk[{256, 256}, 100], 20]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageTrim.html) for more details.