---
title: ImageDisplacements
---

`ImageDisplacements[{image1, image2, …, imagen}]` gives estimated horizontal and vertical displacements between consecutive images.

- `ImageDisplacements[{image1, image2, …, imagen}, flow]` uses `flow` as an initial estimate for displacement between `image1` and `image2`.

## Examples

```wolfram
ImageDisplacements[{image1, image2}]
```

```wolfram
ImageDisplacements[VideoFrameList[video, 5]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageDisplacements.html) for more details.