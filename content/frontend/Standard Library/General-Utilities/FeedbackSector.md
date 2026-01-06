---
title: FeedbackSector
---

`FeedbackSector` is an option to NyquistPlot that specifies the sector limits of the nonlinearity in the feedback. 

## Examples

```wolfram
(* Create a Nyquist plot with feedback sector *)
sys = TransferFunctionModel[1/(s + 1), s];
NyquistPlot[sys, FeedbackSector -> {0.5, 2}]

(* Default sector *)
NyquistPlot[sys, FeedbackSector -> Automatic]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeedbackSector.html) for more details.*