# KuwaharaFilter

`KuwaharaFilter[data, r]` computes for each element `p` in data the variance of the values in the four `(r+1)×(r+1)` squares that have `p` as a corner, and replaces `p` with the mean of the values of the square with least variance.

## Examples

```wolfram
KuwaharaFilter[image, 3]
```

```wolfram
KuwaharaFilter[ExampleData[{"TestImage", "Lena"}], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KuwaharaFilter.html) for more details.*