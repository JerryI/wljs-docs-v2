---
title: CountryData
---

`CountryData["tag", property]` gives the value of the specified property for the country, country-like entity, or group of countries specified by "tag".

`CountryData["tag", {property, ..., dates}]` gives time series for certain economic and other properties.

## Examples

Get country population:

```wolfram
CountryData["France", "Population"]
```

Get country capital:

```wolfram
CountryData["Germany", "Capital"]
(* Entity["City", {"Berlin", "Berlin", "Germany"}] *)
```

List all countries:

```wolfram
CountryData[]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CountryData.html) for more details.