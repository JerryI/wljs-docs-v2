---
title: GeomagneticModelData
---

`GeomagneticModelData[]` returns the current magnetic field data for the current location.

`GeomagneticModelData[locationspec]` returns the current magnetic field data for a location.

`GeomagneticModelData[datespec]` returns the magnetic field data for the specified time for the current location.

`GeomagneticModelData[locationspec,datespec]` returns the magnetic field data for the specified time and location.

`GeomagneticModelData[locationspec,datespec,component]` returns the component of the magnetic field for the specified time and location.

## Examples

```wolfram
GeomagneticModelData[Entity["City", {"Paris", "IleDeFrance", "France"}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeomagneticModelData.html) for more details.