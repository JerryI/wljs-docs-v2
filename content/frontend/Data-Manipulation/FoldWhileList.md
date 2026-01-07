---
title: FoldWhileList
---

`FoldWhileList[f, x, {a1, a2, ...}, test]` returns {x, f[x, a1], f[f[x, a1], a2], ...}, repeatedly applying f with subsequent values ai until applying test to the result does not yield True.

- `FoldWhileList[f, list, test]` is equivalent to `FoldWhileList[f, First[list], Rest[list], test]`.
- `FoldWhileList[f, x, {a1, a2, ...}, test, m]` supplies the most recent m results as arguments for test at each step.
- `FoldWhileList[f, x, {a1, a2, ...}, test, All]` supplies all results so far as arguments for test at each step.
- `FoldWhileList[f, test]` represents an operator form.

## Examples

Accumulate until result exceeds 10:

```wolfram
FoldWhileList[Plus, 0, Range[10], # < 10 &]
```

Multiply while less than 100:

```wolfram
FoldWhileList[Times, 1, Range[10], # < 100 &]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FoldWhileList.html) for more details.*