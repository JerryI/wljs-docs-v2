# Beta

`Beta[a, b]` gives the Euler beta function B(a, b). `Beta[z, a, b]` gives the incomplete beta function.

## Examples

Beta function:

```wolfram
Beta[2, 3]
(* 1/12 *)

Beta[1/2, 1/2]
(* Pi *)
```

Numerical evaluation:

```wolfram
N[Beta[2.5, 3.5]]
(* 0.0285714 *)
```

Relation to Gamma:

```wolfram
Beta[a, b] == Gamma[a] Gamma[b] / Gamma[a + b]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Beta.html) for more details.*