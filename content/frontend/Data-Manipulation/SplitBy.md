---
title: SplitBy
---

`SplitBy[list, f]` splits list into sublists consisting of runs of successive elements that give the same value when f is applied.

`SplitBy[list, {f1, f2, ...}]` recursively splits list into sublists by testing elements successively with each of the fi.

## Examples

Split by a function:

```wolfram
SplitBy[{1, 2, 2, 3, 1, 1, 1}, EvenQ]
(* {{1}, {2, 2}, {3}, {1, 1, 1}} *)
```

Split strings by first character:

```wolfram
SplitBy[{"apple", "ant", "banana", "cherry"}, First@Characters[#] &]
(* {{"apple", "ant"}, {"banana"}, {"cherry"}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SplitBy.html) for more details.