---
title: VideoPadding
---

`VideoPadding` is an option for `GridVideo` and other video functions to specify how to pad video frames when input videos have different durations.

## Examples

Specify black padding for shorter videos:

```wolfram
GridVideo[{video1, video2}, VideoPadding -> Black]
(* Video[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoPadding.html) for more details.*