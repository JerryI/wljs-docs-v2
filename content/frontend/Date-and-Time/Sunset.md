---
title: Sunset
---

`Sunset[]` gives the time of the next sunset for the current date and location.

`Sunset[datespec]` gives the time of the next sunset for the specified dates.

`Sunset[locationspec]` gives the times of the next sunset for the specified locations.

`Sunset[locationspec,datespec]` gives the time of the next sunset for the specified date and location.

`Sunset[{{location1,date1},{location2,date2},…}]` gives the times of the next sunset for all specified locations on the specified dates.

`Sunset[locationspec,datespec,func]` uses func to determine what to return for extended locations.

## Examples

Get the next sunset time:

```wolfram
Sunset[]
(* DateObject[...] *)
```

Get sunset for a specific location:

```wolfram
Sunset[Entity["City", {"NewYork", "NewYork", "UnitedStates"}]]
(* DateObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Sunset.html) for more details.*