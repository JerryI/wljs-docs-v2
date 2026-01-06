---
title: O
---

`O[x]^n` represents a term of order x^n in power series, indicating omitted higher-order terms.

## Examples

In series expansion:

```wolfram
Series[Sin[x], {x, 0, 3}]
(* x - x^3/6 + O[x]^4 *)
```

Remove O terms with Normal:

```wolfram
Normal[Series[Exp[x], {x, 0, 3}]]
(* 1 + x + x^2/2 + x^3/6 *)
```

Arithmetic with O:

```wolfram
(1 + O[x]^2) * (x + O[x]^3)
(* x + O[x]^2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/O.html) for more details.*