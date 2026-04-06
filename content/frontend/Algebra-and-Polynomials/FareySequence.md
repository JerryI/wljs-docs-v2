---
title: FareySequence
---

`FareySequence[n]` generates the Farey sequence of order n.

`FareySequence[n,k]` gives the kth element of the Farey sequence of order n.

## Examples

```wolfram
(* Generate Farey sequence of order 4 *)
FareySequence[4]
(* {0, 1/4, 1/3, 1/2, 2/3, 3/4, 1} *)

(* Get a specific element *)
FareySequence[5, 3]

(* Length of Farey sequence *)
Length[FareySequence[10]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FareySequence.html) for more details.