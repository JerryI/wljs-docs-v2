---
title: GeogravityModelData
---

`GeogravityModelData[]` returns the gravitational field data for the current location.

- `GeogravityModelData[locationspec]` returns the gravitational field data for a location.
- `GeogravityModelData[locationspec, component]` returns the component of the gravitational field.

## Examples

```wolfram
GeogravityModelData[]
```

```wolfram
GeogravityModelData[Entity["City", {"NewYork", "NewYork", "UnitedStates"}], "Magnitude"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeogravityModelData.html) for more details.*