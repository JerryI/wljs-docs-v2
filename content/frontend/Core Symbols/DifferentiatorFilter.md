# DifferentiatorFilter

`DifferentiatorFilter[data,ωc]` applies a differentiator filter with a cutoff frequency ωc to an array of data.

`DifferentiatorFilter[data,ωc,n]` uses a filter kernel of length n.

`DifferentiatorFilter[data,ωc,n,wfun]` applies a smoothing window wfun to the filter kernel.

## Examples

Apply a differentiator filter to data:

```wolfram
data = Table[Sin[x], {x, 0, 2 Pi, 0.1}];
DifferentiatorFilter[data, 0.5]
```

Use a specific kernel length:

```wolfram
DifferentiatorFilter[data, 0.5, 21]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DifferentiatorFilter.html) for more details.*