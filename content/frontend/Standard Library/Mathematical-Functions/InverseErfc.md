---
title: InverseErfc
---

`InverseErfc[s]` gives the inverse complementary error function, solving for z in s = erfc(z).

## Examples

Compute inverse:

```wolfram
InverseErfc[0.5]
(* 0.476936 *)
```

Verify relationship:

```wolfram
Erfc[InverseErfc[1.5]]
(* 1.5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseErfc.html) for more details.*