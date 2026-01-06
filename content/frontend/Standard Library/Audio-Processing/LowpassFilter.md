# LowpassFilter

`LowpassFilter[data, ωc]` applies a lowpass filter with a cutoff frequency ωc to an array of data.

- `LowpassFilter[data, ωc, n]` uses a filter kernel of length n.
- `LowpassFilter[data, ωc, n, wfun]` applies a smoothing window wfun to the filter kernel.

## Examples

Apply a lowpass filter to noisy data:
```wolfram
data = Table[Sin[x] + RandomReal[{-0.2, 0.2}], {x, 0, 10, 0.1}];
LowpassFilter[data, 0.1]
```

Use a specific kernel length:
```wolfram
LowpassFilter[data, 0.2, 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LowpassFilter.html) for more details.*