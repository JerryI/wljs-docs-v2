# FullSimplify

`FullSimplify[expr]` tries a wide range of transformations involving elementary and special functions to find the simplest form.

## Examples

Simplify with special functions:

```wolfram
FullSimplify[Sin[x]^2 + Cos[x]^2]
(* 1 *)
```

Simplify complex expressions:

```wolfram
FullSimplify[Gamma[n + 1]/Gamma[n], n > 0]
(* n *)
```

With assumptions:

```wolfram
FullSimplify[Log[Exp[x]], x \[Element] Reals]
(* x *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FullSimplify.html) for more details.*