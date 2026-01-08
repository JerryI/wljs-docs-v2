---
title: TautologyQ
---

`TautologyQ[bf]` gives True if all combinations of values of variables make the Boolean function bf yield True.

`TautologyQ[expr, {a1, a2, ...}]` gives True if all combinations of values of the ai make the Boolean expression expr yield True.

## Examples

Check for tautology:

```wolfram
TautologyQ[a || !a]
(* True *)
```

Non-tautology:

```wolfram
TautologyQ[a && b]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TautologyQ.html) for more details.