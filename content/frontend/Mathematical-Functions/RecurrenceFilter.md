---
title: RecurrenceFilter
---

`RecurrenceFilter[{α,β},x]` filters x using a linear recurrence equation with coefficients α and β.

`RecurrenceFilter[tf,x]` uses a discrete-time filter defined by the TransferFunctionModel tf.

`RecurrenceFilter[…,x,{y0,y-1,…}]` uses a specified list {y0,y-1,…} as the initial condition.

`RecurrenceFilter[…,image]` filters image.

`RecurrenceFilter[…,sound]` filters sampled sound object.

## Examples

Apply a simple recurrence filter:

```wolfram
RecurrenceFilter[{{1}, {0.5}}, {1, 0, 0, 0, 0}]
(* {1., 0.5, 0.25, 0.125, 0.0625} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecurrenceFilter.html) for more details.*