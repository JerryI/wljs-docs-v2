# SeriesTermGoal

`SeriesTermGoal` is an option for `Asymptotic`, `DiscreteAsymptotic` and similar functions that specifies the number of desired terms in an asymptotic approximation.

## Examples

```wolfram
Asymptotic[Exp[x], x -> Infinity, SeriesTermGoal -> 5]
```

```wolfram
DiscreteAsymptotic[n!, n -> Infinity, SeriesTermGoal -> 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SeriesTermGoal.html) for more details.*