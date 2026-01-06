---
title: CompiledFunction
---

`CompiledFunction[...]` represents compiled code for evaluating a compiled function.

## Examples

Create and use a compiled function:

```wolfram
cf = Compile[{x}, x^2];
cf[5.0]
(* 25. *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompiledFunction.html) for more details.*