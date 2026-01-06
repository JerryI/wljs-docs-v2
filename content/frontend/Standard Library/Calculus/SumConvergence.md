# SumConvergence

`SumConvergence[f,n]` gives conditions for the sum ∑f to be convergent.

`SumConvergence[f,{n1,n2,…}]` gives conditions for the multiple sum to be convergent.

`SumConvergence[f,{n,a,∞}]` gives conditions for the sum to be convergent on the interval [a,∞).

`SumConvergence[f,{n,a,∞},…,{m,b,∞}]` gives conditions for the multiple sum to be convergent.

## Examples

Test convergence of 1/n^2:

```wolfram
SumConvergence[1/n^2, n]
(* True *)
```

Test convergence with a parameter:

```wolfram
SumConvergence[1/n^p, n]
(* p > 1 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SumConvergence.html) for more details.*