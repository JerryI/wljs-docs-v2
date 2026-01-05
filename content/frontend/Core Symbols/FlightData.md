# FlightData

`FlightData[spec,options]` returns a subset of properties for a flight or selection of flights with specifications spec.

`FlightData[spec,prop,options]` returns the value of the property prop for specifications spec.

`FlightData[spec,prop,datespec,options]` returns the value of the property prop for a specific time or time range datespec.

## Examples

Get information about a flight:

```wolfram
FlightData["UAL123"]
```

Get a specific property:

```wolfram
FlightData["UAL123", "Position"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FlightData.html) for more details.*