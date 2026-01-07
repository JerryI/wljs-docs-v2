---
title: DeleteDuplicatesBy
---

`DeleteDuplicatesBy[data, f]` deletes elements that give duplicate values when f is applied.

`DeleteDuplicatesBy[f]` represents an operator form.

## Examples

Keep first of each length:

```wolfram
DeleteDuplicatesBy[{"a", "bb", "ccc", "dd", "e"}, StringLength]
(* {"a", "bb", "ccc"} *)
```

Keep first of each absolute value:

```wolfram
DeleteDuplicatesBy[{1, -1, 2, -2, 3}, Abs]
(* {1, 2, 3} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteDuplicatesBy.html) for more details.*