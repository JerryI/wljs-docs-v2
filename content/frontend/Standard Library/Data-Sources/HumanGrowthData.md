# HumanGrowthData

`HumanGrowthData[spec]` returns the range of values within one standard deviation of the mean for all properties of human growth at the specification spec.

- `HumanGrowthData[spec, property]` returns the range for a specific property.
- `HumanGrowthData[spec, index]` returns values at the specified percentile.
- `HumanGrowthData[spec, property, index]` returns value at a specific percentile for a property.
- `HumanGrowthData[spec, property, quantity]` returns percentile and probability density for a value.

## Examples

```wolfram
HumanGrowthData[{"Male", Quantity[5, "Years"]}]
```

```wolfram
HumanGrowthData[{"Female", Quantity[10, "Years"]}, "Height"]
```

```wolfram
HumanGrowthData[{"Male", Quantity[2, "Years"]}, "Weight", 50]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HumanGrowthData.html) for more details.*