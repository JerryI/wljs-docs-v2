# Hypergeometric0F1

`Hypergeometric0F1[a, z]` is the confluent hypergeometric function $_0F_1(;a;z)$.

## Examples

Compute the function:

```wolfram
Hypergeometric0F1[2, 1.0]
(* 1.59064 *)
```

Relation to Bessel functions:

```wolfram
Hypergeometric0F1[1, -x^2/4] // FullSimplify
(* BesselJ[0, x] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Hypergeometric0F1.html) for more details.*