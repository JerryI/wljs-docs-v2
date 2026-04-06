---
title: Put
---

`expr >> filename` writes expr to a file.

`Put[expr1, expr2, ..., "filename"]` writes a sequence of expressions to a file.

## Examples

Save an expression:

```wolfram
{1, 2, 3} >> "mydata.m"
```

Save multiple expressions:

```wolfram
Put[x = 5, y = 10, "values.m"]
```

Read back with Get:

```wolfram
Get["mydata.m"]
(* {1, 2, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Put.html) for more details.