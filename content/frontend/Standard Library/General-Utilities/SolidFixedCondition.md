# SolidFixedCondition

`SolidFixedCondition[pred, vars, pars]` represents a fully constrained solid boundary for PDEs with predicate pred indicating where it applies, with model variables vars and global parameters pars.

## Examples

```wolfram
SolidFixedCondition[x == 0, {u[x, y]}, {}]
```

```wolfram
SolidFixedCondition[True, {u[x, y, z]}, {t}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidFixedCondition.html) for more details.*