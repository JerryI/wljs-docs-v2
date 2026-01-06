---
title: TideData
---

`TideData[spec]` returns the tidal properties for a location or a set of tidal parameters.

`TideData[spec, prop]` returns the specified property for the location or tidal parameters indicated.

`TideData[spec, prop, datespec]` returns the value of a specified property for a date or set of dates.

## Examples

Get tide information for a location:

```wolfram
TideData[Entity["Ocean", "AtlanticOcean"]]
```

Get tide height at a specific time:

```wolfram
TideData[Here, "TideHeight", Now]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TideData.html) for more details.*