# ReliabilityDistribution

`ReliabilityDistribution[bexpr, {{x1, dist1}, {x2, dist2}, ...}]` represents the reliability distribution for a system with components xi having reliability distribution disti, where the whole system is working when the Boolean expression bexpr is `True`, and component xi is working when xi is `True`.

This is used for reliability analysis of systems with multiple components.

## Examples

```wolfram
(* Series system - all must work *)
ReliabilityDistribution[a && b, {{a, ExponentialDistribution[1]}, {b, ExponentialDistribution[2]}}]
```

```wolfram
(* Parallel system - at least one must work *)
ReliabilityDistribution[a || b, {{a, ExponentialDistribution[1]}, {b, ExponentialDistribution[1]}}]
```

```wolfram
Mean[ReliabilityDistribution[x1 && x2, {{x1, WeibullDistribution[2, 1]}, {x2, WeibullDistribution[2, 1]}}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReliabilityDistribution.html) for more details.*