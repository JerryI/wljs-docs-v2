---
title: GalleryView
---

`GalleryView[{expr1, expr2, ...}]` represents an object in which the expri are displayed in a browsable gallery layout.

- `GalleryView[{assoc1, assoc2, ...}]` uses each of the associations associ to define the display of an item in the gallery.

## Examples

Create a gallery of colors:

```wolfram
GalleryView[{Red, Green, Blue, Yellow, Orange}]
```

Create a gallery of images:

```wolfram
GalleryView[Table[ExampleData[{"TestImage", img}], {img, {"Lena", "Mandrill", "House"}}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GalleryView.html) for more details.*