# WeatherData

`WeatherData[loc, "property"]` gives the most recent measurement for the specified weather property at the location corresponding to loc.

- `WeatherData[loc, "property", date]` gives all measurements during the specified date.
- `WeatherData[loc, "property", {start, end}]` gives a list of dates and measurements for the time interval start to end.
- `WeatherData[loc, "property", {start, end, step}]` gives measurements aggregated over the time period represented by step.

## Examples

```wolfram
WeatherData["Boston", "Temperature"]
```

```wolfram
WeatherData[Here, "Weather"]
```

```wolfram
WeatherData["New York", "Temperature", {DateObject[{2024, 1, 1}], Today}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeatherData.html) for more details.*