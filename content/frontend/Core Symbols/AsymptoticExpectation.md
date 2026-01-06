# AsymptoticExpectation

`AsymptoticExpectation[expr, x \[Distributed] dist, a -> a0]` computes an asymptotic approximation for the expectation of expr centered at a0, under the assumption that x follows the probability distribution dist.

`AsymptoticExpectation[expr, vars, {a, a0, n}]` computes the asymptotic expectation to order n.

## Examples

Asymptotic expectation:

```wolfram
AsymptoticExpectation[x^2, x \[Distributed] NormalDistribution[a, 1], 
  a -> Infinity]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticExpectation.html) for more details.*