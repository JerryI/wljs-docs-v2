---
title: NetFoldOperator
---

`NetFoldOperator[net]` represents a net in which net is folded over a sequence of inputs, maintaining a recurrent state.

`NetFoldOperator[net,{outi->in1,…}]` represents a net in which net is folded over its inputs, maintaining a recurrent state by feeding the outi of each step back to the ini of the next step.

`NetFoldOperator[net,feedback,{const1,const2,…}]` treats the inputs consti to net as being constant instead of mapped over.

`NetFoldOperator[net,feedback,constants,{out1,…}]` returns the sequence of values for the specific outputs outi.

## Examples

Create a fold operator with a GRU:

```wolfram
NetFoldOperator[GatedRecurrentLayer[10]]
```

Fold over a sequence:

```wolfram
NetFoldOperator[BasicRecurrentLayer[5]][RandomReal[1, {10, 3}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetFoldOperator.html) for more details.*