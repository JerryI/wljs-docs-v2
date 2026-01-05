# InverseFourierTransform

`InverseFourierTransform[expr, ω, t]` gives the symbolic inverse Fourier transform of expr.

## Examples

Inverse transform:

```wolfram
InverseFourierTransform[E^(-ω^2/4)/Sqrt[2], ω, t]
(* E^(-t^2) *)
```

Round-trip verification:

```wolfram
InverseFourierTransform[FourierTransform[f[t], t, ω], ω, t]
(* f[t] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseFourierTransform.html) for more details.*