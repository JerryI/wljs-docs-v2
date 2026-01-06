# GeneratingFunction

`GeneratingFunction[expr,n,x]` gives the generating function in x for the sequence whose nth series coefficient is given by the expression expr.

`GeneratingFunction[expr,{n1,…,nm},{x1,…,xm}]` gives the multidimensional generating function in x1,…,xm whose n1,…,nm coefficient is given by expr.

## Examples

```wolfram
GeneratingFunction[n^2, n, x]
(* x (1 + x)/(1 - x)^3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GeneratingFunction.html) for more details.*