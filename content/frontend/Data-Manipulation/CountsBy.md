---
title: CountsBy
---

`CountsBy[{e1, e2, ...}, f]` gives an association whose keys are the distinct values of the f[ei], and whose values give the number of times these f[ei] values appear.

`CountsBy[f]` represents an operator form of CountsBy that can be applied to an expression.

## Examples

Count by absolute value:

```wolfram
CountsBy[{-2, -1, 1, 2, 2}, Abs]
(* <|2 -> 3, 1 -> 2|> *)
```

Count words by length:

```wolfram
CountsBy[{"cat", "dog", "bird", "fish"}, StringLength]
(* <|3 -> 2, 4 -> 2|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CountsBy.html) for more details.