---
title: KeyIntersection
---

`KeyIntersection[{assoc1, assoc2, ...}]` generates a list of associations in which only elements whose keys appear in all the *associ* are retained.

## Examples

```wolfram
KeyIntersection[{<|"a" -> 1, "b" -> 2|>, <|"a" -> 3, "c" -> 4|>}]
(* {<|"a" -> 1|>, <|"a" -> 3|>} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyIntersection.html) for more details.*