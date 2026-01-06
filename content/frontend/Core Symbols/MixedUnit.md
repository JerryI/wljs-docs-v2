# MixedUnit

`MixedUnit[{unit1, unit2, ..., unitn}]` represents a mixed-unit expression consisting of units unit1 through unitn.

## Examples

```wolfram
MixedUnit[{"Hours", "Minutes", "Seconds"}]
```

```wolfram
UnitConvert[Quantity[5000, "Seconds"], MixedUnit[{"Hours", "Minutes", "Seconds"}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MixedUnit.html) for more details.*