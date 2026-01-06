# MersennePrimeExponentQ

`MersennePrimeExponentQ[n]` returns True if n is a Mersenne prime exponent, and False otherwise.

## Examples

Test known exponents:

```wolfram
MersennePrimeExponentQ[7]
(* True, since 2^7 - 1 = 127 is prime *)
```

Non-exponent:

```wolfram
MersennePrimeExponentQ[8]
(* False *)
```

First several exponents:

```wolfram
Select[Range[100], MersennePrimeExponentQ]
(* {2, 3, 5, 7, 13, 17, 19, 31, 61, 89} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MersennePrimeExponentQ.html) for more details.*