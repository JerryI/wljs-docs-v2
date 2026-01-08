---
title: RandomReal
---

`RandomReal[]` gives a pseudorandom real number in the range 0 to 1.

`RandomReal[{xmin, xmax}]` gives a pseudorandom real in the specified range.

`RandomReal[range, n]` gives a list of n pseudorandom reals.

## Examples

Random number between 0 and 1:

```wolfram
RandomReal[]
(* 0.472... *)
```

Random number in a range:

```wolfram
RandomReal[{10, 20}]
(* 15.3... *)
```

List of random numbers:

```wolfram
RandomReal[1, 5]
(* {0.23..., 0.87..., 0.12..., 0.56..., 0.91...} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomReal.html) for more details.