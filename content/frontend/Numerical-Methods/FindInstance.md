---
title: FindInstance
---

`FindInstance[expr, vars]` finds an instance of vars that makes the statement expr be True.

## Examples

Find an integer solution:

```wolfram
FindInstance[x^2 + y^2 == 25, {x, y}, Integers]
(* {{x -> 0, y -> -5}} *)
```

Find multiple instances:

```wolfram
FindInstance[x^2 < 10, x, Integers, 5]
(* {{x -> -3}, {x -> -2}, {x -> -1}, {x -> 0}, {x -> 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindInstance.html) for more details.*