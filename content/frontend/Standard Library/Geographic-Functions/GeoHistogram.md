# GeoHistogram

`GeoHistogram[locs]` plots a density histogram of the geographic locations `locs`.

- `GeoHistogram[locs, bspec]` plots a density histogram with bins specified by `bspec`.
- `GeoHistogram[locs, bspec, hspec]` plots a density histogram with bin densities computed according to the specification `hspec`.

## Examples

```wolfram
GeoHistogram[RandomGeoPosition[10]]
```

```wolfram
GeoHistogram[EntityClass["City", "UnitedStates"], Quantity[100, "Kilometers"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoHistogram.html) for more details.*