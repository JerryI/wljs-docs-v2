---
title: Construct
---

`Construct[f, x]` gives `f[x]`. `Construct[f, x1, ..., xn]` gives `f[x1, ..., xn]`.

## Examples

Apply a function dynamically:

```wolfram
Construct[Plus, 1, 2, 3]
(* 6 *)
```

Use with symbolic functions:

```wolfram
Construct[f, a, b]
(* f[a, b] *)
```

Useful for meta-programming:

```wolfram
Map[Construct[#, 2] &, {Sin, Cos, Tan}]
(* {Sin[2], Cos[2], Tan[2]} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Construct.html) for more details.*