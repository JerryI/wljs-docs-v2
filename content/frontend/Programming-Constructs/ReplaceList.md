---
title: ReplaceList
---

`ReplaceList[expr, rules]` attempts to transform the entire expression expr by applying a rule or list of rules in all possible ways, and returns a list of the results obtained.

- `ReplaceList[expr, rules, n]` gives a list of at most n results.
- `ReplaceList[rules]` is an operator form of `ReplaceList` that can be applied to an expression.

## Examples

```wolfram
ReplaceList[{a, b, c}, {x_, y___} -> {x, {y}}]
```

```wolfram
ReplaceList[x + y + z, a_ + b_ :> {a, b}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReplaceList.html) for more details.*