# Modulus

`Modulus -> n` is an option that can be given in certain algebraic functions to specify that integers should be treated modulo n.

## Examples

Polynomial GCD modulo a prime:

```wolfram
PolynomialGCD[x^2 - 1, x - 1, Modulus -> 5]
```

Factor modulo a prime:

```wolfram
Factor[x^4 + 1, Modulus -> 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Modulus.html) for more details.*