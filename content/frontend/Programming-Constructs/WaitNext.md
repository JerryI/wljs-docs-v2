---
title: WaitNext
---

`WaitNext[{eid1,eid2,…}]` waits until the first evaluation represented by any of the eidi finishes, then returns its result, the corresponding eidi, and the list of remaining eidk.

`WaitNext[{eid1,eid2,…},h]` wraps the head h around the result before returning it.

## Examples

Wait for the first parallel evaluation to complete:

```wolfram
eids = ParallelSubmit /@ {Pause[1]; 1, Pause[2]; 2};
{result, eid, rest} = WaitNext[eids]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaitNext.html) for more details.*