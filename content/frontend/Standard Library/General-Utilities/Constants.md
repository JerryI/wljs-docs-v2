# Constants

`Constants` is an option for Dt which gives a list of objects to be taken as constants.

## Examples

Treat a as a constant in differentiation:

```wolfram
Dt[a x^2, x, Constants -> {a}]
(* 2 a x *)
```

Without specifying constants:

```wolfram
Dt[a x^2, x]
(* 2 a x + x^2 Dt[a, x] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Constants.html) for more details.*