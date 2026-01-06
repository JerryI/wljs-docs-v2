# RandomComplex

`RandomComplex[]` gives a pseudorandom complex number with real and imaginary parts in the range 0 to 1.

`RandomComplex[{zmin, zmax}]` gives a pseudorandom complex number in the rectangle with corners given by zmin and zmax.

`RandomComplex[range, n]` gives a list of n pseudorandom complex numbers.

## Examples

Random complex number:

```wolfram
RandomComplex[]
(* 0.472 + 0.831 I *)
```

In a specific range:

```wolfram
RandomComplex[{-1 - I, 1 + I}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomComplex.html) for more details.*