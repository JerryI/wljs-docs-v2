---
title: NetGraph
---

`NetGraph[{layer1, layer2, ...}, {m1 -> n1, m2 -> n2, ...}]` specifies a neural net defined by a graph in which the output of layer mi is given as input to layer ni.

`NetGraph[<|name1 -> layer1, name2 -> layer2, ...|>, {namem1 -> namen1, ...}]` specifies a net with explicitly named layers.

`NetGraph[layer]` converts a layer or a `NetChain` into an equivalent minimal `NetGraph`.

## Examples

```wolfram
net = NetGraph[
 {LinearLayer[2], ElementwiseLayer[Ramp], ThreadingLayer[Plus]},
 {1 -> 2, {NetPort["Input"], 2} -> 3}
]
```

Evaluating a `NetGraph` displays a visual preview of its layers, ports, and connections. The result remains a normal `NetGraph` expression and can be assigned, inspected, or used in later neural-network operations.


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetGraph.html) for more details.
