# PopupWindow

`PopupWindow[expr, contents]` displays as expr, but pops up a window containing contents when clicked.

## Examples

Simple popup:

```wolfram
PopupWindow["Click me", "Hello World!"]
```

With graphics:

```wolfram
PopupWindow[
  Graphics[Disk[]],
  Plot[Sin[x], {x, 0, 2 Pi}]
]
```

Information popup:

```wolfram
PopupWindow["Details", "This is additional information"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PopupWindow.html) for more details.*