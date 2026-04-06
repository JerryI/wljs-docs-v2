---
title: SubsetCases
---

`SubsetCases[list,patt]` gives a list of the sublists in list that match the pattern patt in any order.

`SubsetCases[list,patt->rhs]` gives a list of the values of rhs corresponding to matching sublists.

`SubsetCases[list,patt,n]` includes only the first n matches.

## Examples

Find subsets matching a pattern:

```wolfram
SubsetCases[{1, 2, 3, 4}, {_?OddQ, _?EvenQ}]
(* {{1, 2}, {1, 4}, {3, 2}, {3, 4}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SubsetCases.html) for more details.