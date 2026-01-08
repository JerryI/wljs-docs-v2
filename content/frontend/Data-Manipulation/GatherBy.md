---
title: GatherBy
---

`GatherBy[list, f]` gathers elements into sublists that give the same value when f is applied.

`GatherBy[list, {f1, f2, ...}]` gathers into nested sublists using fi at level i.

## Examples

Group by a function:

```wolfram
GatherBy[{1, 2, 3, 4, 5, 6}, EvenQ]
(* {{1, 3, 5}, {2, 4, 6}} *)
```

Group strings by length:

```wolfram
GatherBy[{"a", "ab", "abc", "bc", "c"}, StringLength]
(* {{"a", "c"}, {"ab", "bc"}, {"abc"}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GatherBy.html) for more details.