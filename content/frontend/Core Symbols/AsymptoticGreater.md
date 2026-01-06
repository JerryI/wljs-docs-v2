# AsymptoticGreater

`AsymptoticGreater[f, g, x -> x*]` gives conditions for f(x) ≻ g(x) or f(x) ∈ ω(g(x)) as x -> x*.

`AsymptoticGreater[f, g, {x1, ..., xn} -> {x1*, ..., xn*}]` gives conditions for the multivariate case.

## Examples

Test if one function dominates another:

```wolfram
AsymptoticGreater[x^3, x^2, x -> Infinity]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticGreater.html) for more details.*