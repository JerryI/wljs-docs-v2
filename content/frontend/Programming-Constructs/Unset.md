---
title: Unset
---

`lhs =.` removes any rules defined for lhs.

## Examples

Remove a definition:

```wolfram
x = 5;
x
(* 5 *)

x =.;
x
(* x *)
```

Remove function definition:

```wolfram
f[x_] := x^2;
f[3]
(* 9 *)

f[x_] =.;
f[3]
(* f[3] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Unset.html) for more details.