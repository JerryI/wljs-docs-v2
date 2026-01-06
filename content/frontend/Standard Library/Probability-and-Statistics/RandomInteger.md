---
title: RandomInteger
---

`RandomInteger[{imin, imax}]` gives a pseudorandom integer in the range imin to imax.

`RandomInteger[imax]` gives a pseudorandom integer in the range 0 to imax.

`RandomInteger[range, n]` gives a list of n pseudorandom integers.

## Examples

Random integer from 1 to 10:

```wolfram
RandomInteger[{1, 10}]
(* 7 *)
```

List of random integers:

```wolfram
RandomInteger[100, 5]
(* {42, 87, 13, 56, 91} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomInteger.html) for more details.*