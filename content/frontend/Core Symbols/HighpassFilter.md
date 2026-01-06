# HighpassFilter

`HighpassFilter[data, ωc]` applies a highpass filter with a cutoff frequency `ωc` to an array of data.

- `HighpassFilter[data, ωc, n]` uses a filter kernel of length `n`.
- `HighpassFilter[data, ωc, n, wfun]` applies a smoothing window `wfun` to the filter kernel.

## Examples

```wolfram
HighpassFilter[RandomReal[1, 100], 0.1]
```

```wolfram
HighpassFilter[Table[Sin[t] + 0.5 Sin[10 t], {t, 0, 10, 0.01}], 0.3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HighpassFilter.html) for more details.*