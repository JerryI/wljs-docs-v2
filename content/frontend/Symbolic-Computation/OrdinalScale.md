---
title: OrdinalScale
---

`OrdinalScale[{cat1, cat2, ..., catn}]` represents a set of ordered categories cati with order cat1 < cat2 < … < catn.

- `OrdinalScale[{cat1, ..., catn}, {val1, ..., valn}]` associates the category cati with the numeric value vali.
- `OrdinalScale[<|cat1 -> val1, ..., catn -> valn|>]` also associates the category cati with the numeric value vali.
- `OrdinalScale[{cat1, ..., catn}, vals, {lab1, ..., labn}]` displays the category cati as the corresponding labi when used as a label in plots.

## Examples

```wolfram
OrdinalScale[{"Low", "Medium", "High"}]
```

```wolfram
OrdinalScale[<|"Small" -> 1, "Medium" -> 2, "Large" -> 3|>]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrdinalScale.html) for more details.