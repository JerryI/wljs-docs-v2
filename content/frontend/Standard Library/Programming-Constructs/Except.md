---
title: Except
---

`Except[c]` is a pattern object that matches any expression except one that matches c.

`Except[c, p]` matches any expression that matches p but not c.

## Examples

Match anything except a specific value:

```wolfram
Cases[{1, 2, 3, a, b}, Except[2]]
(* {1, 3, a, b} *)
```

Match integers except specific ones:

```wolfram
Cases[{1, 2, 3, 4, 5}, Except[2 | 4, _Integer]]
(* {1, 3, 5} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Except.html) for more details.*