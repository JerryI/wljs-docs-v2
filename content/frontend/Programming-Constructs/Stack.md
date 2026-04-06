---
title: Stack
---

`Stack[]` shows the current evaluation stack, giving a list of the tags associated with evaluations that are currently being done.

`Stack[pattern]` gives a list of expressions currently being evaluated which match the pattern.

## Examples

View the stack during evaluation:

```wolfram
f[x_] := g[x];
g[x_] := Stack[];
f[1]
(* {f, g} *)
```

Stack with pattern matching:

```wolfram
Stack[_Plus]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Stack.html) for more details.