---
title: Sharpen
---

`Sharpen[image]` gives a sharpened version of image.

- `Sharpen[image, r]` gives a version of image sharpened over pixel radius r.

## Examples

Sharpen an image:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
Sharpen[img]
```

With specific radius:

```wolfram
Sharpen[img, 3]
```

Strong sharpening:

```wolfram
Sharpen[img, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sharpen.html) for more details.