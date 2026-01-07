---
title: BandstopFilter
---

`BandstopFilter[data, {ω1, ω2}]` applies a bandstop filter with cutoff frequencies ω1 and ω2 to an array of data.

`BandstopFilter[data, {{ω, q}}]` uses center frequency ω and quality factor q.

`BandstopFilter[data, spec, n]` uses a filter kernel of length n.

## Examples

Apply bandstop filter:

```wolfram
data = Table[Sin[2 Pi 0.1 t] + Sin[2 Pi 0.4 t], {t, 100}];
BandstopFilter[data, {0.3, 0.5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BandstopFilter.html) for more details.*