---
title: Counts
---

`Counts[list]` gives an association whose keys are the distinct elements and values are their counts.

## Examples

Count element occurrences:

```wolfram
Counts[{a, b, a, c, b, a}]
(* <|a -> 3, b -> 2, c -> 1|> *)
```

Count characters:

```wolfram
Counts[Characters["mississippi"]]
(* <|"m" -> 1, "i" -> 4, "s" -> 4, "p" -> 2|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Counts.html) for more details.