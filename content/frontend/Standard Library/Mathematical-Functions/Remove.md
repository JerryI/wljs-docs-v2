---
title: Remove
---

`Remove[s1, s2, ...]` removes the symbols completely, so their names are no longer recognized by the Wolfram Language.

## Examples

Remove a symbol:

```wolfram
x = 5;
Remove[x]
x
(* x - symbol is undefined and removed *)
```

Remove by pattern:

```wolfram
Remove["myVar*"]
(* Removes all symbols starting with myVar *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Remove.html) for more details.*