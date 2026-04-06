---
title: TagUnset
---

`f /: lhs =.` removes any rules defined for lhs, associated with the symbol f.

## Examples

```wolfram
f /: g[f[x_]] := x^2;
f /: g[f[x_]] =.
```

```wolfram
x /: h[x] = 5;
x /: h[x] =.
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TagUnset.html) for more details.