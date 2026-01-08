---
title: RipleyK
---

`RipleyK[pdata,r]` estimates Ripley's K function K(r) at radius r for point data pdata.

`RipleyK[pproc,r]` computes K(r) for the point process pproc.

`RipleyK[bdata,r]` computes K(r) for binned data bdata.

`RipleyK[pspec]` generates the function K that can be applied repeatedly at different radii r.

## Examples

```wolfram
RipleyK[RandomReal[1, {100, 2}], 0.1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RipleyK.html) for more details.