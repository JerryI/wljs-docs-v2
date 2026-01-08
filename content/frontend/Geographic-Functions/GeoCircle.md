---
title: GeoCircle
---

`GeoCircle[loc, r]` is a two-dimensional `GeoGraphics` primitive that represents a circle of radius `r` centered at the location `loc` on the surface of the Earth.

- `GeoCircle[loc, r, {α1, α2}]` represents a sector of a circle from bearing `α1` to bearing `α2`.

## Examples

```wolfram
GeoGraphics[GeoCircle[Entity["City", {"Paris", "IleDeFrance", "France"}], Quantity[100, "Kilometers"]]]
```

```wolfram
GeoGraphics[GeoCircle[Here, Quantity[50, "Miles"], {0, 90}]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoCircle.html) for more details.