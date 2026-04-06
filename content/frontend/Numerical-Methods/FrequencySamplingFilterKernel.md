---
title: FrequencySamplingFilterKernel
---

`FrequencySamplingFilterKernel[{a1, ..., ak}]` creates a finite impulse response (FIR) filter kernel using a frequency sampling method from amplitude values ai.

- `FrequencySamplingFilterKernel[{a1, ..., ak}, m]` creates an FIR filter kernel of type m.

## Examples

Create a lowpass filter kernel:

```wolfram
FrequencySamplingFilterKernel[{1, 1, 1, 0, 0, 0, 0, 0, 1, 1}]
```

Apply the filter to data:

```wolfram
kernel = FrequencySamplingFilterKernel[{1, 1, 0, 0}];
ListConvolve[kernel, data]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FrequencySamplingFilterKernel.html) for more details.