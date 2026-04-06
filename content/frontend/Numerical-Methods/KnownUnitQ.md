---
title: KnownUnitQ
---

`KnownUnitQ[expr]` returns `True` if `expr` is a canonical unit, and `False` otherwise.

- `KnownUnitQ[expr, dims]` gives `True` if `expr` is a canonical unit with physical dimensions `dims`, and `False` otherwise.

## Examples

```wolfram
KnownUnitQ["Meters"]
```

```wolfram
KnownUnitQ["Joules", "Energy"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KnownUnitQ.html) for more details.