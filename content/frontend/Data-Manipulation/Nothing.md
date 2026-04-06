---
title: Nothing
---

`Nothing` represents an element of a list that will automatically be removed.

## Examples

Nothing disappears from lists:

```wolfram
{1, 2, Nothing, 3, Nothing, 4}
(* {1, 2, 3, 4} *)
```

Conditionally remove elements:

```wolfram
Table[If[OddQ[n], n, Nothing], {n, 1, 6}]
(* {1, 3, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Nothing.html) for more details.