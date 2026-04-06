---
title: EndAdd
---

`EndAdd[]` returns the present context, and reverts to the previous one, prepending the present context to `$ContextPath`.

## Examples

End a package definition and add to context path:

```wolfram
Begin["MyPackage`"];
(* definitions *)
EndAdd[]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndAdd.html) for more details.