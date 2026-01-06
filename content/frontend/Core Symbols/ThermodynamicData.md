# ThermodynamicData

`ThermodynamicData["name", "property"]` gives the value of the specific property for the substance "name".

- `ThermodynamicData["name", "property", {parameter1 -> quantity1, parameter2 -> quantity2}]` gives the value of the specific property for the substance "name" at the specified parameters.

## Examples

Get the boiling point of water:
```wolfram
ThermodynamicData["Water", "BoilingPoint"]
```

Get density at specific conditions:
```wolfram
ThermodynamicData["Water", "Density", {"Temperature" -> Quantity[25, "DegreesCelsius"]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ThermodynamicData.html) for more details.*