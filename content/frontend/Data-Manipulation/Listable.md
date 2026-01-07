---
title: Listable
---

`Listable` is an attribute that can be assigned to a symbol f to indicate that the function f should automatically be threaded over lists that appear as its arguments.

## Examples

Define a listable function:

```wolfram
SetAttributes[myFunc, Listable]
myFunc[x_] := x^2
myFunc[{1, 2, 3}]
(* {1, 4, 9} *)
```

Built-in listable functions:

```wolfram
Sin[{0, Pi/2, Pi}]
(* {0, 1, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Listable.html) for more details.*