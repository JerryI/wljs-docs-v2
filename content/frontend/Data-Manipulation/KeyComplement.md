---
title: KeyComplement
---

`KeyComplement[{assocall, assoc1, assoc2, ...}]` generates an association in which only elements whose keys appear in assocall but not in any of the associ are retained.

## Examples

Find complement keys:

```wolfram
KeyComplement[{<|a -> 1, b -> 2, c -> 3|>, <|a -> 4|>}]
(* <|b -> 2, c -> 3|> *)
```

Multiple exclusions:

```wolfram
KeyComplement[{<|a -> 1, b -> 2, c -> 3, d -> 4|>, <|a -> 0|>, <|c -> 0|>}]
(* <|b -> 2, d -> 4|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyComplement.html) for more details.*