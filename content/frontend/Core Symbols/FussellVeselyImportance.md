# FussellVeselyImportance

`FussellVeselyImportance[rdist, t]` gives the Fussell–Vesely importances for all components in the ReliabilityDistribution rdist at time t.

- `FussellVeselyImportance[fdist, t]` gives the Fussell–Vesely importances for all components in the FailureDistribution fdist at time t.

## Examples

Calculate Fussell-Vesely importance for a reliability system:

```wolfram
rdist = ReliabilityDistribution[a && b, {a, b}];
FussellVeselyImportance[rdist, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FussellVeselyImportance.html) for more details.*