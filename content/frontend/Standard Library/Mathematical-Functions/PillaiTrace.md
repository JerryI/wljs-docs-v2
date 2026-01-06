# PillaiTrace

`PillaiTrace[m1, m2]` gives Pillai's trace for the matrices m1 and m2.

## Examples

Compute Pillai's trace for two matrices:
```wolfram
m1 = {{1, 2}, {3, 4}};
m2 = {{5, 6}, {7, 8}};
PillaiTrace[m1, m2]
```

Use in MANOVA analysis:
```wolfram
PillaiTrace[hypothesisMatrix, errorMatrix]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PillaiTrace.html) for more details.*