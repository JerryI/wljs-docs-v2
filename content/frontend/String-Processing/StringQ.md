---
title: StringQ
---

`StringQ[expr]` gives `True` if expr is a string, and `False` otherwise.

## Examples

Test for strings:

```wolfram
StringQ["hello"]
(* True *)
```

```wolfram
StringQ[hello]
(* False *)
```

Filter strings from a list:

```wolfram
Select[{1, "a", 2, "b"}, StringQ]
(* {"a", "b"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringQ.html) for more details.