---
title: HoldFirst
---

`HoldFirst` is an attribute that specifies that the first argument to a function is to be maintained in an unevaluated form.

## Examples

Define function with HoldFirst:

```wolfram
SetAttributes[myFunc, HoldFirst];
myFunc[1 + 1, 2 + 2]
(* myFunc[1 + 1, 4] *)
```

Check attributes:

```wolfram
Attributes[Set]
(* {HoldFirst, Protected, SequenceHold} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldFirst.html) for more details.*