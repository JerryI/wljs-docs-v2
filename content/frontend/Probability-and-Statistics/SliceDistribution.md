---
title: SliceDistribution
---

`SliceDistribution[proc, t]` represents the distribution of the process state at time t.

- `SliceDistribution[proc, {t1, ..., tk}]` represents the joint distribution of process states at times t1 < ... < tk.

## Examples

Distribution at a specific time:

```wolfram
proc = WienerProcess[];
SliceDistribution[proc, 1]
```

Joint distribution at multiple times:

```wolfram
SliceDistribution[proc, {1, 2, 3}]
```

Sample from slice distribution:

```wolfram
RandomVariate[SliceDistribution[WienerProcess[], 2], 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SliceDistribution.html) for more details.