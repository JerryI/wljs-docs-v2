---
title: PsychrometricPropertyData
---

`PsychrometricPropertyData[spec]` returns the psychrometric properties of moist air for the specified parameters.

- `PsychrometricPropertyData[spec, property]` returns the specified property for the given parameters.

This function computes thermodynamic properties of moist air for HVAC and meteorological applications.

## Examples

```wolfram
PsychrometricPropertyData[<|"Temperature" -> Quantity[25, "DegreesCelsius"], 
  "RelativeHumidity" -> 0.5|>]
```

```wolfram
PsychrometricPropertyData[<|"Temperature" -> Quantity[20, "DegreesCelsius"], 
  "RelativeHumidity" -> 0.6|>, "Enthalpy"]
```

```wolfram
PsychrometricPropertyData[<|"DryBulbTemperature" -> Quantity[30, "DegreesCelsius"], 
  "WetBulbTemperature" -> Quantity[22, "DegreesCelsius"]|>]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PsychrometricPropertyData.html) for more details.*