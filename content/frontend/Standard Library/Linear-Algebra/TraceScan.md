---
title: TraceScan
---

`TraceScan[f, expr]` applies f to all expressions used in the evaluation of expr.

- `TraceScan[f, expr, form]` includes only those expressions which match form.
- `TraceScan[f, expr, s]` includes all evaluations which use transformation rules associated with the symbol s.
- `TraceScan[f, expr, form, fp]` applies f before evaluation and fp after evaluation to expressions used in the evaluation of expr.

Unlike `Trace`, `TraceScan` does not return the trace but instead applies a function to each step.

## Examples

```wolfram
TraceScan[Print, 1 + 1]
```

```wolfram
TraceScan[Sow, 2^3, _Power]
```

```wolfram
TraceScan[Print, {1, 2, 3} // Total, Plus]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TraceScan.html) for more details.*