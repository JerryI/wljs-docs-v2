# MaxLimit

`MaxLimit[f,x->x*]` gives the max limit as x approaches x*.

`MaxLimit[f,{x1->x1*,…,xn->xn*}]` gives the nested max limit.

`MaxLimit[f,{x1,…,xn}->{x1*,…,xn*}]` gives the multivariate max limit.

## Examples

Compute a max limit:

```wolfram
MaxLimit[Sin[x]/x, x -> 0]
(* 1 *)
```

Max limit at infinity:

```wolfram
MaxLimit[(-1)^n/n, n -> Infinity]
(* 0 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxLimit.html) for more details.*