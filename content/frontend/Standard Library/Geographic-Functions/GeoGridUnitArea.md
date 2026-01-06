# GeoGridUnitArea

`GeoGridUnitArea[proj, loc]` gives the actual geo area corresponding to a unit area on the geo grid obtained with projection `proj`, evaluated in the limit of small geo regions around location `loc`.

## Examples

```wolfram
GeoGridUnitArea["Mercator", GeoPosition[{0, 0}]]
```

```wolfram
GeoGridUnitArea["LambertConformalConic", Here]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoGridUnitArea.html) for more details.*