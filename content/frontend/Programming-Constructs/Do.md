---
title: Do
---

`Do[expr, n]` evaluates expr n times.

`Do[expr, {i, imax}]` evaluates expr with the variable i successively taking on the values 1 through imax.

`Do[expr, {i, imin, imax}]` starts with i=imin.

`Do[expr, {i, imin, imax, di}]` uses steps di.

## Examples

Print numbers 1 through 5:

```wolfram
Do[Print[i], {i, 5}]
(* Prints 1, 2, 3, 4, 5 *)
```

Nested iteration:

```wolfram
Do[Print[{i, j}], {i, 2}, {j, 2}]
(* Prints {1,1}, {1,2}, {2,1}, {2,2} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Do.html) for more details.