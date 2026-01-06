---
title: Threshold
---

`Threshold[data]` thresholds data by replacing values close to zero by zero.

`Threshold[data,tspec]` thresholds data using threshold specification tspec.

`Threshold[image,…]` replaces small values of image by zero.

`Threshold[sound,…]` replaces small values of sound by zero.

## Examples

```wolfram
Threshold[{0.1, 0.5, 0.01, 0.8}, 0.2]
(* {0, 0.5, 0, 0.8} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Threshold.html) for more details.*