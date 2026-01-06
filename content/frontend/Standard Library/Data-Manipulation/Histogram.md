# Histogram

`Histogram[{x1, x2, ...}]` plots a histogram of the values. `Histogram[data, bspec]` uses bin width specification `bspec`.

## Examples

Create a histogram of random data:

```wolfram
Histogram[RandomReal[1, 100]]

(* With specified number of bins *)
Histogram[RandomVariate[NormalDistribution[], 1000], 20]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Histogram.html) for more details.*