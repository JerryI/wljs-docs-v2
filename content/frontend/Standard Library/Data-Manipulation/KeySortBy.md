---
title: KeySortBy
---

`KeySortBy[assoc,f]` sorts the elements of an association in the order defined by applying f to each of their keys.

`KeySortBy[f]` represents an operator form of KeySortBy that can be applied to an expression.

## Examples

Sort by string length of keys:

```wolfram
KeySortBy[<|"abc" -> 1, "a" -> 2, "ab" -> 3|>, StringLength]
(* <|"a" -> 2, "ab" -> 3, "abc" -> 1|> *)
```

Use operator form:

```wolfram
KeySortBy[StringLength][<|"long" -> 1, "x" -> 2|>]
(* <|"x" -> 2, "long" -> 1|> *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeySortBy.html) for more details.*