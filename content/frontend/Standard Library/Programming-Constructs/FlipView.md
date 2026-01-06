---
title: FlipView
---

`FlipView[{expr1, expr2}]` represents an object which flips between displaying expr1 and expr2 each time it is clicked.

- `FlipView[{expr1, expr2, ...}]` cyclically flips through successive expri.
- `FlipView[{expr1, expr2, ...}, i]` makes expri be the object currently displayed.

## Examples

Create a flip view with two items:

```wolfram
FlipView[{"Click me!", "Clicked!"}]
```

Create a flip view that cycles through colors:

```wolfram
FlipView[{Red, Green, Blue}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FlipView.html) for more details.*