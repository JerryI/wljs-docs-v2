# CityData

`CityData["name", "property"]` gives the value of the specified property for the city with the specified name.

`CityData["name"]` gives a list of the full specifications of cities whose names are consistent with name.

## Examples

Get the population of a city:

```wolfram
CityData["New York", "Population"]
(* 8336817 *)
```

Get the coordinates:

```wolfram
CityData["Paris", "Coordinates"]
(* GeoPosition[{48.8567, 2.3508}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CityData.html) for more details.*