---
title: PrimeQ
---

`PrimeQ[n]` yields `True` if n is a prime number, and `False` otherwise.

## Examples

Test if a number is prime:

```wolfram
PrimeQ[17]
(* True *)
```

```wolfram
PrimeQ[15]
(* False *)
```

Find primes up to 30:

```wolfram
Select[Range[30], PrimeQ]
(* {2, 3, 5, 7, 11, 13, 17, 19, 23, 29} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PrimeQ.html) for more details.