---
title: GeoDestination
---

`GeoDestination[loc,{d,α}]` gives the end position of the geodesic of length d starting from loc with azimuthal direction α.

## Examples

Find destination 100 km north of a location:

```wolfram
GeoDestination[GeoPosition[{40.7, -74}], {Quantity[100, "km"], 0}]
(* GeoPosition[{41.6, -74}] *)
```

Travel east:

```wolfram
GeoDestination[GeoPosition[{0, 0}], {Quantity[1000, "km"], 90 Degree}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoDestination.html) for more details.*