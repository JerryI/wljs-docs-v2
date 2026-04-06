---
title: FromDMS
---

`FromDMS[{d, m, s}]` converts from degrees, minutes, and seconds to decimal degrees.

- `FromDMS["dms"]` converts from a DMS string to decimal degrees.
- `FromDMS["latlon"]` converts from a latitude-longitude string to latitude and longitude in decimal degrees.

## Examples

Convert degrees, minutes, seconds to decimal:

```wolfram
FromDMS[{40, 26, 46}]
```

Convert a DMS string:

```wolfram
FromDMS["40°26'46\"N"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FromDMS.html) for more details.