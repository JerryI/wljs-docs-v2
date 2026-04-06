---
title: SequenceCount
---

`SequenceCount[list, sub]` gives a count of the number of times sub appears as a sublist of list.

`SequenceCount[list, patt]` gives the number of sublists in list that match the general sequence pattern patt.

## Examples

Count occurrences of a sublist:

```wolfram
SequenceCount[{a, b, a, b, c, a, b}, {a, b}]
(* 3 *)
```

Count pattern matches:

```wolfram
SequenceCount[{1, 2, 3, 4, 5}, {x_, y_} /; y > x]
(* 4 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceCount.html) for more details.