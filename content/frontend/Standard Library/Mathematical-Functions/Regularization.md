# Regularization

`Regularization` is an option for `Sum` and `Product` that specifies what type of regularization to use.

## Examples

Use Dirichlet regularization for a divergent sum:

```wolfram
Sum[n, {n, 1, Infinity}, Regularization -> "Dirichlet"]
(* -1/12 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Regularization.html) for more details.*