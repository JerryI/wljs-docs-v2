---
title: EntityFunction
---

`EntityFunction[x, body]` is a function with a single formal parameter x, to be used in `EntityValue` and related functions.

`EntityFunction[{x1, x2, ...}, body]` is an `EntityFunction` with a list of formal parameters.

## Examples

Create an entity function:

```wolfram
EntityFunction[e, e["Population"]/e["Area"]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EntityFunction.html) for more details.*