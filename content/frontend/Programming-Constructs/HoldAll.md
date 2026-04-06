---
title: HoldAll
---

`HoldAll` is an attribute that specifies that all arguments to a function are to be maintained in an unevaluated form.

## Examples

Define function with HoldAll:

```wolfram
SetAttributes[myFunc, HoldAll];
myFunc[1 + 1]
(* myFunc[1 + 1] *)
```

Check attributes:

```wolfram
Attributes[Function]
(* {HoldAll, Protected} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HoldAll.html) for more details.