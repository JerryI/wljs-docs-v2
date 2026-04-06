---
title: LeastSquaresFilterKernel
---

`LeastSquaresFilterKernel[{{ω1, ..., ωk-1}, {a1, ..., ak}}, n]` creates a k-band finite impulse response (FIR) filter kernel of length n designed using a least squares method, given the specified frequencies ωi and amplitudes ai.

- `LeastSquaresFilterKernel[{"type", spec}, n]` uses the full filter specification {"type", spec}.

## Examples

Create a lowpass filter:

```wolfram
kernel = LeastSquaresFilterKernel[{"Lowpass", 0.3}, 21];
ListLinePlot[kernel]
```

Bandpass filter:

```wolfram
LeastSquaresFilterKernel[{"Bandpass", {0.2, 0.4}}, 31]
```

Apply filter to data:

```wolfram
ListConvolve[kernel, RandomReal[1, 100]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LeastSquaresFilterKernel.html) for more details.