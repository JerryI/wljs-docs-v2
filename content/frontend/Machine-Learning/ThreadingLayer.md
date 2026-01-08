---
title: ThreadingLayer
---

`ThreadingLayer[f]` represents a net layer that takes several input arrays and applies a function f to corresponding array elements.

- `ThreadingLayer[f, bspec]` allows array shapes to be conformed according to broadcasting specification bspec.

## Examples

Element-wise addition:

```wolfram
ThreadingLayer[Plus]
```

Element-wise multiplication:

```wolfram
ThreadingLayer[Times]
```

In a network:

```wolfram
net = NetChain[{LinearLayer[10], ThreadingLayer[Ramp]}];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ThreadingLayer.html) for more details.*