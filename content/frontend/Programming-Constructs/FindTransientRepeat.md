---
title: FindTransientRepeat
---

`FindTransientRepeat[list,n]` returns a pair of lists `{transient,repeat}` where the elements of repeat occur successively at least n times after the elements of the transient part of list.

`FindTransientRepeat[string,n]` returns a pair of strings `{transient,repeat}`.

## Examples

```wolfram
FindTransientRepeat[{1, 2, 3, 4, 5, 3, 4, 5, 3, 4, 5}, 2]
(* {{1, 2}, {3, 4, 5}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindTransientRepeat.html) for more details.