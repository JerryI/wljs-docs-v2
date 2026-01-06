---
title: LexicographicOrder
---

`LexicographicOrder[{a1, a2, ...}, {b1, b2, ...}]` gives `Order[ai, bi]` for the first non-coinciding pair ai, bi of elements, and 0 if the lists are identical.

- `LexicographicOrder[{a1, a2, ...}, {b1, b2, ...}, p]` uses the ordering function p to compare ai with bi.
- `LexicographicOrder[p]` represents an operator form that compares lists when applied to {a1, a2, ...}, {b1, b2, ...}.

## Examples

```wolfram
LexicographicOrder[{1, 2, 3}, {1, 2, 4}]
```

```wolfram
LexicographicOrder[{"apple", "banana"}, {"apple", "cherry"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LexicographicOrder.html) for more details.*