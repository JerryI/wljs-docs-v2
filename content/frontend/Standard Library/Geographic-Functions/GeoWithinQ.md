---
title: GeoWithinQ
---

`GeoWithinQ[reg, loc]` returns `True` if the location `loc` is contained within the region `reg`, and `False` otherwise.

- `GeoWithinQ[reg]` represents an operator form of `GeoWithinQ` that can be applied to a location.

## Examples

```wolfram
GeoWithinQ[Entity["Country", "France"], GeoPosition[{48.8, 2.3}]]
```

```wolfram
GeoWithinQ[Entity["Country", "Germany"]][Entity["City", {"Berlin", "Berlin", "Germany"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeoWithinQ.html) for more details.*