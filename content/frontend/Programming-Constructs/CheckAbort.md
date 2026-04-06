---
title: CheckAbort
---

`CheckAbort[expr, failexpr]` evaluates expr, returning failexpr if an abort occurs.

## Examples

Handle an abort:

```wolfram
CheckAbort[Abort[], "Aborted!"]
(* "Aborted!" *)
```

Normal evaluation without abort:

```wolfram
CheckAbort[1 + 2, "Aborted"]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CheckAbort.html) for more details.