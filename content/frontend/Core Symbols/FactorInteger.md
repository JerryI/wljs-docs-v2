# FactorInteger

`FactorInteger[n]` gives a list of the prime factors of the integer n, together with their exponents.

`FactorInteger[n, k]` does partial factorization, pulling out at most k distinct factors.

## Examples

Factor an integer into primes:

```wolfram
FactorInteger[120]
(* {{2, 3}, {3, 1}, {5, 1}} *)
```

This means 120 = 2³ × 3¹ × 5¹.

Factor a larger number:

```wolfram
FactorInteger[1000]
(* {{2, 3}, {5, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FactorInteger.html) for more details.*