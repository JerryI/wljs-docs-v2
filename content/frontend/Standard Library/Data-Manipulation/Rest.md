---
title: Rest
---

`Rest[list]` gives the list with the first element removed. Equivalent to `Drop[list, 1]`.

## Examples

Remove the first element:

```wolfram
Rest[{a, b, c, d}]
(* {b, c, d} *)

Rest[Range[10]]
(* {2, 3, 4, 5, 6, 7, 8, 9, 10} *)

(* Combine with First *)
{First[{1, 2, 3}], Rest[{1, 2, 3}]}
(* {1, {2, 3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Rest.html) for more details.*