# AsymptoticLessEqual

`AsymptoticLessEqual[f, g, x -> x*]` gives conditions for f(x) ⪯ g(x) or f(x) ∈ O(g(x)) as x -> x*.

`AsymptoticLessEqual[f, g, {x1, ..., xn} -> {x1*, ..., xn*}]` gives conditions for the multivariate case.

## Examples

Check big-O notation:

```wolfram
AsymptoticLessEqual[x + Log[x], x, x -> Infinity]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AsymptoticLessEqual.html) for more details.*