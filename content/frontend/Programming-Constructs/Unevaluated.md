---
title: Unevaluated
---

`Unevaluated[expr]` represents the unevaluated form of expr when passed as an argument to a function.

## Examples

Pass unevaluated expression:

```wolfram
Length[Unevaluated[1 + 2 + 3]]
(* 3 - counts Plus arguments *)
```

Get head of unevaluated:

```wolfram
Head[Unevaluated[{1, 2, 3}]]
(* List *)

Head[{1, 2, 3}]
(* List - same result here *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Unevaluated.html) for more details.