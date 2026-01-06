# AsymptoticEquivalent

`AsymptoticEquivalent[f, g, x -> x*]` gives conditions for f(x) ~ g(x) as x -> x*.

`AsymptoticEquivalent[f, g, {x1, ..., xn} -> {x1*, ..., xn*}]` gives conditions for the multivariate case.

## Examples

Test asymptotic equivalence:

```wolfram
AsymptoticEquivalent[x^2 + x, x^2, x -> Infinity]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticEquivalent.html) for more details.*