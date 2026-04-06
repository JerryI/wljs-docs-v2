---
title: NetBidirectionalOperator
---

`NetBidirectionalOperator[net]` represents a net that applies net to a sequence and to its reverse, concatenating both results into one output sequence.

- `NetBidirectionalOperator[{fnet, bnet}]` uses fnet on the normal input and bnet on the reversed input.
- `NetBidirectionalOperator[nets, agg]` aggregates the two output sequences using the specified aggregation function.

## Examples

```wolfram
NetBidirectionalOperator[LongShortTermMemoryLayer[10]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetBidirectionalOperator.html) for more details.