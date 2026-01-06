---
title: Definition
---

`Definition[symbol]` prints as the definitions given for a symbol, showing all rules and values.

## Examples

View a function definition:

```wolfram
f[x_] := x^2;
f[0] = 1;
Definition[f]
(* f[0] = 1
   f[x_] := x^2 *)
```

View built-in definition:

```wolfram
Definition[Factorial]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Definition.html) for more details.*