---
title: DeleteElements
---

`DeleteElements[list, {e1, e2, ...}]` removes all instances of elements ei from list.

## Examples

Remove elements:

```wolfram
DeleteElements[{a, b, c, b, a}, {a, b}]
(* {c} *)
```

Remove limited instances:

```wolfram
DeleteElements[{a, a, a, b, b}, 1 -> {a}]
(* {a, a, b, b} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteElements.html) for more details.*