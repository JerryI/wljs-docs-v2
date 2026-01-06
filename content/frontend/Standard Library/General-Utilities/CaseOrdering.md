---
title: CaseOrdering
---

`CaseOrdering` is an option for AlphabeticSort and related functions that specifies how upper versus lower case should be sorted.

## Examples

Sort with uppercase first:

```wolfram
AlphabeticSort[{"apple", "Apple", "APPLE"}, CaseOrdering -> 1]
(* {"APPLE", "Apple", "apple"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CaseOrdering.html) for more details.*