---
title: ApplyTo
---

`ApplyTo[x, f]` or `x //= f` computes `f[x]` and resets x to the result.

## Examples

Apply a function to a variable in place:

```wolfram
x = 5;
x //= Sqrt;
x
(* Sqrt[5] *)
```

Chain operations:

```wolfram
list = {3, 1, 4, 1, 5};
list //= Sort;
list
(* {1, 1, 3, 4, 5} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ApplyTo.html) for more details.