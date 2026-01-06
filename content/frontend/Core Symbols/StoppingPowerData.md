# StoppingPowerData

`StoppingPowerData[entity, {"Particle" -> particle, "Energy" -> quantity}, property]` gives the value of the specific property for the substance for the specified particle and the energy of that particle.

## Examples

```wolfram
StoppingPowerData["Water", {"Particle" -> "Proton", "Energy" -> Quantity[10, "MeV"]}, "MassTotalStoppingPower"]
```

```wolfram
StoppingPowerData["Aluminum", {"Particle" -> "Electron", "Energy" -> Quantity[1, "MeV"]}, "Properties"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StoppingPowerData.html) for more details.*