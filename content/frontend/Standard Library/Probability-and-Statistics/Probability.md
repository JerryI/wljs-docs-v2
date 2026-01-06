# Probability

`Probability[pred, x \[Distributed] dist]` gives the probability for an event that satisfies the predicate pred.

## Examples

Probability x > 0 for normal:

```wolfram
Probability[x > 0, x \[Distributed] NormalDistribution[0, 1]]
(* 1/2 *)
```

Probability of range:

```wolfram
Probability[0 < x < 1, x \[Distributed] UniformDistribution[{0, 2}]]
(* 1/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Probability.html) for more details.*