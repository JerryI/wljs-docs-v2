---
title: Latitude
---

`Latitude[pos]` gives the latitude in degrees of a geographic position specified by pos.

`Latitude[pos,datum]` gives the latitude referring to the specified geodetic datum.

## Examples

Get the latitude of a city:

```wolfram
Latitude[Entity["City", {"Paris", "IleDeFrance", "France"}]]
(* 48.8566 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Latitude.html) for more details.