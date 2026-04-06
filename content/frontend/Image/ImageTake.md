---
title: ImageTake
---

`ImageTake[image, n]` gives an image consisting of the first n rows.

`ImageTake[image, {row1, row2}, {col1, col2}]` gives a subimage spanning the specified rows and columns.

## Examples

Take first 100 rows:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
ImageTake[img, 100]
```

Extract a region:

```wolfram
ImageTake[img, {100, 200}, {150, 300}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageTake.html) for more details.