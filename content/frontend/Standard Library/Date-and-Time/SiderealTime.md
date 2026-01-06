---
title: SiderealTime
---

`SiderealTime[]` gives the right ascension of the local meridian for the current date and location.

`SiderealTime[date]` gives the right ascension of the local meridian for the specified date.

`SiderealTime[loc]` gives the right ascension of the local meridian for the specified location.

`SiderealTime[loc,date]` gives the right ascension of the local meridian for the specified date and location.

`SiderealTime[{{loc1,date1},{loc2,date2},…}]` gives the right ascensions of the local meridians for all specified locations on the specified dates.

`SiderealTime[loc,date,func]` uses func to determine what to return for extended locations.

`SiderealTime["MeanTime",loc,date,func]` gives the mean sidereal time for the specified date, location and aggregation function.

## Examples

Get the current sidereal time:

```wolfram
SiderealTime[]
```

Get sidereal time for a specific location:

```wolfram
SiderealTime[Entity["City", {"London", "GreaterLondon", "UnitedKingdom"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SiderealTime.html) for more details.*