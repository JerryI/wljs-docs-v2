---
title: NetGraph
---

`NetGraph[{layer1, layer2, ...}, {m1 -> n1, m2 -> n2, ...}]` specifies a neural net defined by a graph in which the output of layer mi is given as input to layer ni.

`NetGraph[<|name1 -> layer1, name2 -> layer2, ...|>, {namem1 -> namen1, ...}]` specifies a net with explicitly named layers.

`NetGraph[layer]` converts a layer or a `NetChain` into an equivalent minimal `NetGraph`.

## Examples

```wolfram
NetGraph[{LinearLayer[10], Ramp, LinearLayer[5]}, {1 -> 2, 2 -> 3}]
(* NetGraph[...] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetGraph.html) for more details.