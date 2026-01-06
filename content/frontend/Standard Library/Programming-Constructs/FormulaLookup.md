---
title: FormulaLookup
---

`FormulaLookup["query"]` gives a list of the full names of formulas whose names are consistent with "query".

- `FormulaLookup["query", n]` returns at most n results.
- `FormulaLookup["class"]` returns the names of all formulas within that class.

## Examples

Search for formulas containing "Newton":

```wolfram
FormulaLookup["Newton"]
```

Get formulas in the physics class:

```wolfram
FormulaLookup["Physics", 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormulaLookup.html) for more details.*