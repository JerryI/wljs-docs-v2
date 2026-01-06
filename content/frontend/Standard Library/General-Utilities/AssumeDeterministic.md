# AssumeDeterministic

`AssumeDeterministic` is an option for functions such as `BayesianMinimization` that specifies whether or not the function being considered should be assumed to be deterministic.

## Examples

Use with BayesianMinimization:

```wolfram
BayesianMinimization[f, {x \[Element] Interval[{0, 10}]}, 
  AssumeDeterministic -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AssumeDeterministic.html) for more details.*