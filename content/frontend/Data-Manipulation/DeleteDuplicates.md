---
title: DeleteDuplicates
---

`DeleteDuplicates[data]` deletes all duplicates from data, keeping the first occurrence.

## Examples

Remove duplicates:

```wolfram
DeleteDuplicates[{1, 2, 3, 2, 1, 4}]
(* {1, 2, 3, 4} *)
```

With custom test:

```wolfram
DeleteDuplicates[{1, -1, 2, -2, 3}, Abs[#1] == Abs[#2] &]
(* {1, 2, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteDuplicates.html) for more details.