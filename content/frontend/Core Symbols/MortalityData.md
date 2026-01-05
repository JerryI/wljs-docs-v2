# MortalityData

`MortalityData[spec]` gives the values of all properties for the specified demographic.

`MortalityData[spec, property]` gives the value of the specified property for the specified demographic.

## Examples

```wolfram
MortalityData[{"UnitedStates", 2020}]
(* Association with mortality data *)
```

```wolfram
MortalityData[{"UnitedStates", 2020}, "LifeExpectancy"]
(* Life expectancy value *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MortalityData.html) for more details.*