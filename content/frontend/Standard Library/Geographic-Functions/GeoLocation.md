---
title: GeoLocation
---

`GeoLocation` is an option for `Interpreter` and related functions that specifies the location to assume for semantic interpretation.

## Examples

```wolfram
Interpreter["Location", GeoLocation -> Entity["Country", "France"]]["capital"]
```

```wolfram
Interpreter["City", GeoLocation -> Entity["Country", "Germany"]]["Munich"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoLocation.html) for more details.*