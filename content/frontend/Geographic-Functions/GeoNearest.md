---
title: GeoNearest
---

`GeoNearest[enttype, loc]` returns the geographic entity of type `enttype` closest to the geo location `loc`.

- `GeoNearest[{reg1, reg2, …, regn}, loc]` returns the nearest of the `regi`.
- `GeoNearest[{reg1 -> val1, reg2 -> val2, …, regn -> valn}, loc]` returns the `vali` corresponding to the nearest `regi`.
- `GeoNearest[{reg1, reg2, …, regn} -> {val1, val2, …, valn}, loc]` returns the same result.
- `GeoNearest[{reg1, reg2, …, regn} -> Automatic, loc]` takes the `vali` to be successive integers `i`.
- `GeoNearest[spec, loc, n]` returns `n` nearest values.
- `GeoNearest[spec, loc, {n, r}]` returns up to `n` matches within a radius `r` of `loc`.

## Examples

```wolfram
GeoNearest["City", Here]
```

```wolfram
GeoNearest["Airport", Entity["City", {"NewYork", "NewYork", "UnitedStates"}], 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoNearest.html) for more details.