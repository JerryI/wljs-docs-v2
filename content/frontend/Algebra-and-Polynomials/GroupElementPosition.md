---
title: GroupElementPosition
---

`GroupElementPosition[group, g]` returns the position of the element `g` in the list of elements of `group`.

- `GroupElementPosition[group, {g1, …, gn}]` returns the list of positions of the elements `g1, …, gn` in `group`.

## Examples

```wolfram
GroupElementPosition[SymmetricGroup[3], Cycles[{{1, 2}}]]
```

```wolfram
GroupElementPosition[CyclicGroup[6], {Cycles[{}], Cycles[{{1, 2, 3, 4, 5, 6}}]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GroupElementPosition.html) for more details.