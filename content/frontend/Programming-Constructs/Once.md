---
title: Once
---

`Once[expr]` evaluates expr once in each Wolfram Language session, always returning the result from the first evaluation.

- `Once[expr, loc]` evaluates expr once and caches the result in persistence location loc.

## Examples

Evaluate an expression only once:

```wolfram
Once[Print["Evaluated!"; RandomReal[]]]
(* Prints "Evaluated!" only the first time *)
```

Cache result persistently:

```wolfram
Once[RandomReal[], "Local"]
```

Use for expensive computations:

```wolfram
data = Once[Import["https://example.com/large-dataset.csv"]];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Once.html) for more details.*