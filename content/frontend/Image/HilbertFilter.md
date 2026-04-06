---
title: HilbertFilter
---

`HilbertFilter[data, ωc]` applies a Hilbert filter with a cutoff frequency ωc to an array of data.

- `HilbertFilter[data, ωc, n]` uses a filter kernel of length n.
- `HilbertFilter[data, ωc, n, wfun]` applies a smoothing window wfun to the filter kernel.

## Examples

```wolfram
data = Table[Sin[2 Pi t] + Sin[4 Pi t], {t, 0, 1, 0.01}];
HilbertFilter[data, 0.1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HilbertFilter.html) for more details.