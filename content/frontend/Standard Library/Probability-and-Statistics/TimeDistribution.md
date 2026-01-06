# TimeDistribution

`TimeDistribution[dist, tunit]` represents a linear distribution of time of day according to dist with time scale unit tunit originating at midnight.

- `TimeDistribution[dist, tunit, torig]` represents a linear distribution of time of day with time origin at torig.

## Examples

Create a time distribution:

```wolfram
dist = TimeDistribution[NormalDistribution[12, 2], "Hour"]
```

Generate random times:

```wolfram
RandomVariate[TimeDistribution[UniformDistribution[], "Hour"]]
```

Distribution centered at noon:

```wolfram
TimeDistribution[NormalDistribution[0, 1], "Hour", TimeObject[{12, 0}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeDistribution.html) for more details.*