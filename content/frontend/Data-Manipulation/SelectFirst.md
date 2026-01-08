---
title: SelectFirst
---

`SelectFirst[data, crit]` gives the first element for which `crit[ei]` is `True`, or `Missing["NotFound"]` if none is found.

## Examples

Find first even number:

```wolfram
SelectFirst[{1, 3, 5, 6, 7, 8}, EvenQ]
(* 6 *)
```

With default value:

```wolfram
SelectFirst[{1, 3, 5}, EvenQ, "none"]
(* "none" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SelectFirst.html) for more details.