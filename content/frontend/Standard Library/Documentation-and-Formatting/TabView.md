---
title: TabView
---

`TabView[{lbl1->expr1, lbl2->expr2, ...}]` represents an object in which clicking the tab with label lbli displays expri.

`TabView[{lbl1->expr1,lbl2->expr2,...},i]` makes the ith tab be the one currently selected.

`TabView[{{v1,lbl1->expr1},{v2,lbl2->expr2},...},v]` associates values vi with successive tabs, and makes the tab with value v be the one currently selected.

`TabView[{expr1,expr2,...}]` takes the tab labels to be successive integers.

## Examples

```wolfram
TabView[{"One" -> "First content", "Two" -> "Second content"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TabView.html) for more details.*