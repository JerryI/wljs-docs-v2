---
title: FindPeaks
---

`FindPeaks[list]` gives positions and values of the detected peaks in list.

`FindPeaks[list,σ]` finds peaks that survive Gaussian blurring up to scale σ.

`FindPeaks[list,σ,s]` finds peaks with minimum sharpness s.

`FindPeaks[list,σ,s,t]` finds only peaks with values greater than t.

`FindPeaks[list,σ,{s,σs},{t,σt}]` uses different scales for thresholding sharpness and value.

## Examples

Find peaks in a list:

```wolfram
FindPeaks[{1, 3, 2, 5, 1, 4, 2}]
(* {{2, 3}, {4, 5}, {6, 4}} *)
```

Find peaks with minimum value threshold:

```wolfram
FindPeaks[{1, 3, 2, 5, 1, 4, 2}, 0, 0, 4]
(* {{4, 5}, {6, 4}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindPeaks.html) for more details.*