---
title: SequenceIndicesLayer
---

`SequenceIndicesLayer[]` represents a net layer that produces a list of indices for an input sequence.

## Examples

Create a sequence indices layer:
```wolfram
layer = SequenceIndicesLayer[];
layer[{a, b, c}]
```

Use in a neural network:
```wolfram
NetChain[{SequenceIndicesLayer[], LinearLayer[10]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceIndicesLayer.html) for more details.