---
title: ToRadicals
---

`ToRadicals[expr]` attempts to express all Root objects in expr in terms of radicals.

## Examples

Convert roots to radicals:

```wolfram
ToRadicals[Root[#^2 - 2 &, 1]]
(* -Sqrt[2] *)
```

Solve and convert:

```wolfram
ToRadicals[Solve[x^3 - 2 == 0, x]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ToRadicals.html) for more details.