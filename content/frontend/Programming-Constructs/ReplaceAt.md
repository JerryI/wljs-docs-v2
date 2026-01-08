---
title: ReplaceAt
---

`ReplaceAt[expr, rules, n]` transforms expr by replacing the nth element using rules.

- `ReplaceAt[expr, rules, {i, j, ...}]` replaces the part at position {i, j, ...}.
- `ReplaceAt[expr, rules, {{i1, j1, ...}, {i2, j2, ...}, ...}]` replaces parts at several positions.
- `ReplaceAt[rules, pos]` represents an operator form that can be applied to an expression.

## Examples

```wolfram
ReplaceAt[{a, b, c}, x_ :> x^2, 2]
```

```wolfram
ReplaceAt[{{1, 2}, {3, 4}}, x_ :> 10 x, {2, 1}]
```

```wolfram
ReplaceAt[x_ :> -x, 1][{a, b, c}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplaceAt.html) for more details.