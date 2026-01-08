---
title: RandomPrime
---

`RandomPrime[{imin, imax}]` gives a pseudorandom prime in the range imin to imax.

`RandomPrime[imax]` gives a random prime from 2 to imax.

`RandomPrime[range, n]` gives a list of n random primes.

## Examples

Random prime up to 100:

```wolfram
RandomPrime[100]
(* 47 *)
```

Random primes in a range:

```wolfram
RandomPrime[{100, 200}, 5]
(* {103, 179, 127, 191, 157} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomPrime.html) for more details.