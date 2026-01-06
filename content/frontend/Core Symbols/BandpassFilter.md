# BandpassFilter

`BandpassFilter[data, {ω1, ω2}]` applies a bandpass filter with cutoff frequencies ω1 and ω2 to an array of data.

`BandpassFilter[data, {{ω, q}}]` uses center frequency ω and quality factor q.

`BandpassFilter[data, spec, n]` uses a filter kernel of length n.

## Examples

Apply bandpass filter:

```wolfram
data = Table[Sin[2 Pi 0.1 t] + Sin[2 Pi 0.4 t], {t, 100}];
BandpassFilter[data, {0.2, 0.5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BandpassFilter.html) for more details.*