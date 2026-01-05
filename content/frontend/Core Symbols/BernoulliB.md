# BernoulliB

`BernoulliB[n]` gives the Bernoulli number B_n. `BernoulliB[n, x]` gives the Bernoulli polynomial B_n(x).

## Examples

Bernoulli numbers:

```wolfram
Table[BernoulliB[n], {n, 0, 6}]
(* {1, -1/2, 1/6, 0, -1/30, 0, 1/42} *)
```

Bernoulli polynomial:

```wolfram
BernoulliB[3, x]
(* x^3 - 3*x^2/2 + x/2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BernoulliB.html) for more details.*