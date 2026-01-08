---
title: Shallow
---

`Shallow[expr]` prints as a shallow form of expr.

`Shallow[expr, depth]` prints with all parts of expr below the specified depth given in skeleton form.

`Shallow[expr, {depth, length}]` also gives parts whose lengths are above the specified limit in skeleton form.

## Examples

Show shallow form:

```wolfram
Shallow[{{{{a, b}}, c}, d}]
(* {{<<1>>}, d} *)
```

Limit depth:

```wolfram
Shallow[Table[i, {i, 100}], 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Shallow.html) for more details.*