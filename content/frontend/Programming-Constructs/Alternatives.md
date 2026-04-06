---
title: Alternatives
---

`p1 | p2 | ...` is a pattern object that represents any of the patterns pi.

## Examples

Match multiple patterns:

```wolfram
Cases[{1, "a", 2, "b", 3}, _Integer | _String]
(* {1, "a", 2, "b", 3} *)
```

Use alternatives in string patterns:

```wolfram
StringCases["cat dog bird", "cat" | "dog"]
(* {"cat", "dog"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Alternatives.html) for more details.