# PeakDetect

`PeakDetect[list]` gives a binary list in which 1s correspond to peak positions in *list*.

- `PeakDetect[list, σ]` detects peaks that survive Gaussian blurring up to scale *σ*.
- `PeakDetect[list, σ, s]` detects peaks with minimum sharpness *s*.
- `PeakDetect[list, σ, s, t]` detects only peaks with values greater than *t*.
- `PeakDetect[list, σ, {s, σs}, {t, σt}]` uses different scales for thresholding sharpness and value.

## Examples

```wolfram
data = {0, 1, 3, 5, 3, 1, 0, 2, 4, 2, 0};
PeakDetect[data]
(* {0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PeakDetect.html) for more details.*