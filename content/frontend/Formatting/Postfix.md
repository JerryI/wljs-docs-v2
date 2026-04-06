---
title: Postfix
---

`Postfix[f[expr]]` prints with f[expr] given in default postfix form: expr//f.

`Postfix[f[expr],h]` prints as exprh.

## Examples

Display a function call in postfix form:

```wolfram
Postfix[f[x]]
(* x // f *)
```

Use a custom separator:

```wolfram
Postfix[f[x], "@"]
(* x@f *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Postfix.html) for more details.