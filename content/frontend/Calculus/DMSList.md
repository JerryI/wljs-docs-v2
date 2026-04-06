---
title: DMSList
---

`DMSList[θ]` converts an angle θ given in decimal degrees to a DMS list {degree, minute, second}.

`DMSList["dms"]` converts a DMS string to a DMS list {degree, minute, second}.

`DMSList["latlon"]` converts a latitude-longitude string to a pair of DMS lists.

`DMSList[GeoPosition[...]]` converts `GeoPosition` data to a pair or array of pairs of DMS lists.

## Examples

Convert decimal degrees to DMS list:

```wolfram
DMSList[40.7128]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DMSList.html) for more details.