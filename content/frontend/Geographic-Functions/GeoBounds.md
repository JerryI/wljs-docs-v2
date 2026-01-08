---
title: GeoBounds
---

`GeoBounds[g]` gives the ranges of latitudes and longitudes in the geo region g.

`GeoBounds[g, δ]` pads ranges of latitudes and longitudes by ±δ.

`GeoBounds[g, Scaled[s]]` pads range of latitudes and longitudes by a scaled amount s.

## Examples

Get bounds of a country:

```wolfram
GeoBounds[Entity["Country", "France"]]
(* {{41.3, 51.1}, {-5.14, 9.56}} *)
```

Pad the bounds:

```wolfram
GeoBounds[Entity["Country", "France"], Quantity[1, "Degrees"]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoBounds.html) for more details.