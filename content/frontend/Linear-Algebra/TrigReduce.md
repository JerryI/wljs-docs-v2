---
title: TrigReduce
---

`TrigReduce[expr]` rewrites products and powers of trigonometric functions in terms of trigonometric functions with combined arguments.

## Examples

Reduce trigonometric products:

```wolfram
TrigReduce[Sin[x]^2]
(* 1/2 (1 - Cos[2 x]) *)
```

Combine products:

```wolfram
TrigReduce[Sin[x] Cos[y]]
(* 1/2 (Sin[x - y] + Sin[x + y]) *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrigReduce.html) for more details.