---
title: With
---

`With[{x = x0, y = y0, ...}, expr]` specifies that all occurrences of the symbols x, y, ... in expr should be replaced by x0, y0, ....

## Example

Define local constants:

```wolfram
With[{a = 2, b = 3}, a + b]
(* 5 *)
```

Useful for injecting values into held expressions:

```wolfram
With[{x = 5}, Hold[x^2]]
(* Hold[25] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/With.html) for more details.*