---
title: TreeQ
---

`TreeQ[tree]` yields `True` if tree is a valid `Tree` object and `False` otherwise.

## Examples

Check if an expression is a valid tree:

```wolfram
TreeQ[Tree[a, {Tree[b], Tree[c]}]]
(* True *)
```

```wolfram
TreeQ[{1, 2, 3}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeQ.html) for more details.