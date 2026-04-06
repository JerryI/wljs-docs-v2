---
title: GeoDisk
---

`GeoDisk[loc, r]` is a two-dimensional `GeoGraphics` primitive that represents a filled disk of radius `r` centered at the location `loc` on the surface of the Earth.

- `GeoDisk[loc, r, {α1, α2}]` gives a sector of a disk from bearing `α1` to bearing `α2`.

## Examples

```wolfram
GeoGraphics[GeoDisk[Entity["City", {"Tokyo", "Tokyo", "Japan"}], Quantity[200, "Kilometers"]]]
```

```wolfram
GeoGraphics[GeoDisk[Here, Quantity[100, "Miles"], {0, 180}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDisk.html) for more details.