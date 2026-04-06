---
title: SatisfiableQ
---

`SatisfiableQ[bf]` gives True if a combination of values of variables exists that makes the Boolean function bf yield True.

`SatisfiableQ[expr, {a1, a2, ...}]` gives True if a combination of values of the ai exists that makes the Boolean expression expr yield True.

## Examples

Check if formula is satisfiable:

```wolfram
SatisfiableQ[a && b]
(* True *)
```

Unsatisfiable formula:

```wolfram
SatisfiableQ[a && !a]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SatisfiableQ.html) for more details.