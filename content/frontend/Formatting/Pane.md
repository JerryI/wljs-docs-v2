---
title: Pane
---

`Pane[expr]` displays as a pane containing expr.

`Pane[expr, w]` makes the pane be w printer's points wide, linewrapping the contents if necessary.

`Pane[expr, {w, h}]` makes the pane w points wide and h points high.

## Examples

Simple pane:

```wolfram
Pane["Long text content here", 100]
```

With size:

```wolfram
Pane[Plot[Sin[x], {x, 0, 2 Pi}], {200, 150}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pane.html) for more details.*