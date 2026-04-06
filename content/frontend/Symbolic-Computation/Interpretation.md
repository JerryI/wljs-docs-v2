---
title: Interpretation
---

`Interpretation[e, expr]` represents an object that displays as e, but is interpreted as the unevaluated form of expr if supplied as input.

- `Interpretation[{x = x0, y = y0, ...}, e, expr]` allows local variables x, y, … in e and expr.

## Examples

```wolfram
Interpretation[Style["π", Red], Pi]
```

```wolfram
Interpretation["click me", Button["Click", Print["Hello"]]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interpretation.html) for more details.