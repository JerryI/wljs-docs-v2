---
title: Bookmarks
---

`Bookmarks` is an option for `Manipulate` and related functions that gives a list of bookmark settings.

## Examples

Manipulate with bookmarks:

```wolfram
Manipulate[Plot[Sin[a x], {x, 0, 2 Pi}], {a, 1, 5}, 
  Bookmarks -> {"a=2" :> {a -> 2}, "a=4" :> {a -> 4}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Bookmarks.html) for more details.*