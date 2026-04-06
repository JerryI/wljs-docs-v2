---
title: ImageMarker
---

`ImageMarker[pos]` is a `HighlightImage` specification that represents a marker at position pos.

- `ImageMarker[pos, marker]` represents a custom marker at position pos.
- `ImageMarker[{pos1, pos2, ...}, ...]` represents multiple marker positions posi.

## Examples

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
HighlightImage[img, ImageMarker[{100, 100}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImageMarker.html) for more details.