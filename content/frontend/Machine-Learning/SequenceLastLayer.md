---
title: SequenceLastLayer
---

`SequenceLastLayer[]` represents a net that takes a sequence of inputs and returns the last element of the sequence.

## Examples

```wolfram
net = NetChain[{LongShortTermMemoryLayer[10], SequenceLastLayer[]}];
net[RandomReal[1, {5, 3}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceLastLayer.html) for more details.