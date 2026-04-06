---
title: RootReduce
---

`RootReduce[expr]` attempts to reduce expr to a single Root object.

## Examples

Reduce a sum of roots:

```wolfram
RootReduce[Sqrt[2] + Sqrt[3]]
(* Root[1 - 10 #1^2 + #1^4 &, 4] *)
```

Simplify a root expression:

```wolfram
RootReduce[Sqrt[2]^3]
(* 2 Sqrt[2] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RootReduce.html) for more details.