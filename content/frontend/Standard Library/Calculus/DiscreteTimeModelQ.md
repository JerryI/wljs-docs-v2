---
title: DiscreteTimeModelQ
---

`DiscreteTimeModelQ[lsys]` gives `True` if lsys is a discrete-time systems model, and `False` otherwise.

## Examples

Check if model is discrete-time:

```wolfram
DiscreteTimeModelQ[TransferFunctionModel[{{{1}}, z - 1}, z]]
(* True *)
```

Continuous-time model:

```wolfram
DiscreteTimeModelQ[TransferFunctionModel[{{{1}}, s}, s]]
(* False *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteTimeModelQ.html) for more details.*