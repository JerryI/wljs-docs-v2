---
title: CompiledLayer
---

`CompiledLayer[func]` represents a net layer whose computation is defined by the compilable function func.

`CompiledLayer[func, gradientfunc]` specifies a gradient propagating function allowing the layer to be used in NetTrain.

## Examples

Create a simple compiled layer:

```wolfram
CompiledLayer[Function[x, x^2]]
(* CompiledLayer[...] *)
```

Apply a compiled layer:

```wolfram
layer = CompiledLayer[Function[x, Sin[x]]];
layer[{0, Pi/2, Pi}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompiledLayer.html) for more details.*