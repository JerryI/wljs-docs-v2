# DiscreteRatio

`DiscreteRatio[f, i]` gives the discrete ratio f(i+1)/f(i).

`DiscreteRatio[f, {i, n}]` gives the multiple discrete ratio.

`DiscreteRatio[f, {i, n, h}]` gives the multiple discrete ratio with step h.

## Examples

Basic ratio:

```wolfram
DiscreteRatio[f[i], i]
(* f[1 + i]/f[i] *)
```

Factorial ratio:

```wolfram
DiscreteRatio[i!, i]
(* 1 + i *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteRatio.html) for more details.*