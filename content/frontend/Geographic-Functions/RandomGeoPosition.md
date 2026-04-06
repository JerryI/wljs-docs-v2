---
title: RandomGeoPosition
---

`RandomGeoPosition[]` gives a pseudorandom geo position uniformly distributed on the surface of the Earth.

- `RandomGeoPosition[{{latmin, lonmin}, {latmax, lonmax}}]` gives a pseudorandom geo position uniformly distributed in the given geo bounding box.
- `RandomGeoPosition[g]` gives a pseudorandom geo position uniformly distributed in the geo region g.
- `RandomGeoPosition[g, n]` gives a list of n pseudorandom geo positions uniformly distributed in the geo region g.
- `RandomGeoPosition[g, {n1, n2, ...}]` gives an n1×n2×... pseudorandom geo position array.

## Examples

Get a random location on Earth:

```wolfram
RandomGeoPosition[]
```

Random location within a bounding box:

```wolfram
RandomGeoPosition[{{40, -75}, {42, -73}}]
```

Multiple random positions in a country:

```wolfram
RandomGeoPosition[Entity["Country", "France"], 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomGeoPosition.html) for more details.