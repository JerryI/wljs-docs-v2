---
title: WeatherForecastData
---

`WeatherForecastData[loc]` gives the most recent forecast for all weather forecast properties for the specified location.

`WeatherForecastData[prop]` gives the forecast for the specified property for the current location.

`WeatherForecastData[date]` gives the forecast at the time or times specified by date for all properties at the current location.

`WeatherForecastData[loc, prop]` gives the forecast for the property at the specified location.

`WeatherForecastData[loc, prop, datespec]` gives the forecast at the time or times specified by datespec for the property at the location.

## Examples

```wolfram
WeatherForecastData[Entity["City", {"NewYork", "NewYork", "UnitedStates"}], "Temperature"]
```

```wolfram
WeatherForecastData[$GeoLocation, "Conditions"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeatherForecastData.html) for more details.*