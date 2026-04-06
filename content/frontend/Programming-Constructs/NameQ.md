---
title: NameQ
---

`NameQ["string"]` yields True if there are any symbols whose names match the string pattern given, and yields False otherwise.

## Examples

Check if a symbol exists:

```wolfram
NameQ["Sin"]
(* True *)
```

Check for a non-existent symbol:

```wolfram
NameQ["NonExistentSymbol"]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NameQ.html) for more details.