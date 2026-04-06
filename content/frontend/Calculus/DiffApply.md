---
title: DiffApply
---

`DiffApply[diffobj, expr]` returns the result of applying the given `DiffObject` to the expression expr.

`DiffApply[diffobj, expr, File["file"]]` writes the result of changing expr to file.

## Examples

Apply a diff to an expression:

```wolfram
diff = Diff["abc", "aXc"];
DiffApply[diff, "abc"]
(* "aXc" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiffApply.html) for more details.