---
title: ReverseSort
---

`ReverseSort[list]` sorts the elements of list into reverse canonical order.

`ReverseSort[list, p]` sorts using the ordering function p.

## Examples

Sort a list in descending order:

```wolfram
ReverseSort[{3, 1, 4, 1, 5, 9}]
(* {9, 5, 4, 3, 1, 1} *)
```

Sort strings by length (longest first):

```wolfram
ReverseSort[{"a", "bbb", "cc"}, StringLength]
(* {"bbb", "cc", "a"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReverseSort.html) for more details.