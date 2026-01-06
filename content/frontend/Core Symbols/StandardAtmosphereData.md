# StandardAtmosphereData

`StandardAtmosphereData[altitude, property]` returns the value of the property at the specified geometrical altitude for the chosen model of the standard Earth atmosphere.

- `StandardAtmosphereData[layer, property]` returns a piecewise symbolic approximation with the range of an atmospheric layer for the property.
- `StandardAtmosphereData["SymbolicApproximation", property]` returns the full piecewise symbolic approximation for the property.

## Examples

Get temperature at altitude:
```wolfram
StandardAtmosphereData[Quantity[10, "Kilometers"], "Temperature"]
```

Get pressure profile:
```wolfram
StandardAtmosphereData["Troposphere", "Pressure"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StandardAtmosphereData.html) for more details.*