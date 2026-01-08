---
title: Skeleton
---

`Skeleton[n]` represents a sequence of n omitted elements in an expression printed with Short or Shallow.

## Examples

Skeleton appears in shortened output:

```wolfram
Short[Range[100]]
(* {1, 2, <<96>>, 99, 100} *)
```

The <<96>> is a Skeleton:

```wolfram
InputForm[Short[Range[10]]]
(* {1, 2, Skeleton[6], 9, 10} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Skeleton.html) for more details.