# NCaputoD

`NCaputoD[f, {x, α}, x0]` gives a numerical approximation to the Caputo fractional derivative C₀Dₓᵅf(x) of order α of the function f at the point x0.

## Examples

Fractional derivative of sine:

```wolfram
NCaputoD[Sin[x], {x, 0.5}, 1.0]
```

Half derivative of polynomial:

```wolfram
NCaputoD[x^2, {x, 0.5}, 2]
```

Compare different orders:

```wolfram
Table[NCaputoD[Exp[x], {x, a}, 1], {a, 0.1, 0.9, 0.2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NCaputoD.html) for more details.*