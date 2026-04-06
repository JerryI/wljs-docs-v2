---
title: Span
---

`i;;j` represents a span of elements from `i` to `j`. Used for extracting ranges from lists. `;;` alone means all elements.

## Examples

Extract ranges with span notation:

```wolfram
list = {a, b, c, d, e}

list[[2;;4]]
(* {b, c, d} *)

list[[3;;]]
(* {c, d, e} *)

list[[;;3]]
(* {a, b, c} *)

(* Every other element *)
list[[1;;-1;;2]]
(* {a, c, e} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Span.html) for more details.