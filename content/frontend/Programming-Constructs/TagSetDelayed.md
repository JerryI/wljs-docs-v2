---
title: TagSetDelayed
---

`f/:lhs:=rhs` assigns rhs to be the delayed value of lhs, and associates the assignment with the symbol f.

## Examples

Define an upvalue for a symbol:

```wolfram
f /: g[f[x_]] := x^2
g[f[3]]
(* 9 *)
```

Associate a rule with a specific symbol:

```wolfram
foo /: bar[foo] := "result"
bar[foo]
(* "result" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TagSetDelayed.html) for more details.