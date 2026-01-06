# FourierTransform

`FourierTransform[expr, t, ω]` gives the symbolic Fourier transform of expr.

## Examples

Fourier transform of a Gaussian:

```wolfram
FourierTransform[Exp[-t^2], t, ω]
(* E^(-ω^2/4)/Sqrt[2] *)
```

Rectangular function:

```wolfram
FourierTransform[UnitBox[t], t, ω]
(* Sinc[ω/2]/Sqrt[2 Pi] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FourierTransform.html) for more details.*