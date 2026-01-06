# CentralFeature

`CentralFeature[{x1, x2, ...}]` gives the central feature of the elements xi.

`CentralFeature[{x1 -> v1, x2 -> v2, ...}]` gives the vi corresponding to the central feature xi.

`CentralFeature[data]` gives the central feature for various forms of data.

## Examples

Find the central feature of a list:

```wolfram
CentralFeature[{1, 2, 3, 4, 5}]
(* 3 *)
```

Central feature of geographic locations:

```wolfram
CentralFeature[{GeoPosition[{40, -74}], GeoPosition[{34, -118}], GeoPosition[{41, -87}]}]
(* GeoPosition[{41, -87}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CentralFeature.html) for more details.*