# EarthquakeData

`EarthquakeData[loc]` gives all earthquake properties for the location corresponding to loc.

`EarthquakeData[loc, mag]` restricts earthquakes returned to the magnitude range mag.

`EarthquakeData[loc, mag, {start, end}]` gives earthquake data within the magnitude range mag during the time interval start to end.

`EarthquakeData[loc, mag, {start, end}, property]` gives a time series for the specific earthquake property.

`EarthquakeData[entity, property]` returns data for a specific earthquake.

## Examples

Get recent earthquakes in a region:

```wolfram
EarthquakeData[Entity["City", {"LosAngeles", "California", "UnitedStates"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EarthquakeData.html) for more details.*