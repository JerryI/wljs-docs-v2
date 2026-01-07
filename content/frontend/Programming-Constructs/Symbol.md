---
title: Symbol
---

`Symbol["name"]` refers to a symbol with the specified name, creating it if necessary.

## Examples

Create a symbol from a string:

```wolfram
Symbol["x"]
(* x *)
```

Dynamic symbol creation:

```wolfram
Symbol["var" <> ToString[1]]
(* var1 *)
```

Assign to dynamically created symbol:

```wolfram
Symbol["myVar"] = 42;
myVar
(* 42 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Symbol.html) for more details.*