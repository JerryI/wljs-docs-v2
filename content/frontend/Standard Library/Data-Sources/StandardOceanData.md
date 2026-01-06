---
title: StandardOceanData
---

`StandardOceanData[spec]` returns the thermodynamic properties of seawater for the specified parameters.

- `StandardOceanData[spec, property]` returns the specified property for the given parameters.

## Examples

```wolfram
StandardOceanData[{"Salinity" -> 35, "Temperature" -> Quantity[20, "DegreesCelsius"]}]
```

```wolfram
StandardOceanData[{"Depth" -> Quantity[1000, "Meters"]}, "Density"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StandardOceanData.html) for more details.*