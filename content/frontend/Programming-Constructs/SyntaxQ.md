---
title: SyntaxQ
---

`SyntaxQ["string"]` returns True if the string corresponds to syntactically correct input for a single Wolfram Language expression, and returns False otherwise.

`SyntaxQ["string", form]` uses interpretation rules corresponding to the specified form.

## Examples

Check valid syntax:

```wolfram
SyntaxQ["1 + 2"]
(* True *)
```

Invalid syntax:

```wolfram
SyntaxQ["1 + "]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SyntaxQ.html) for more details.