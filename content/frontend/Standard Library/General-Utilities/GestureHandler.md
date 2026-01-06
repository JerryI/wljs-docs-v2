---
title: GestureHandler
---

`GestureHandler[expr, {gesture1 -> fun1, gesture2 -> fun2, …}]` displays as `expr`, evaluating `funi[value, velocity]` whenever `"gesturei"` occurs within the screen space occupied by `expr`.

- `GestureHandler[expr, {"gesture" -> {fun, funend}, …}]` evaluates `fun` as updates are received for `"gesture"`, followed by `funend[value, velocity]` when the gesture ends.
- `GestureHandler[expr, {"gesture" -> {funstart, fun, funend}, …}]` also evaluates `funstart[value, velocity]` when `"gesture"` begins.

## Examples

```wolfram
GestureHandler[Graphics[Circle[]], {"Drag" -> (Print[#] &)}]
```

```wolfram
GestureHandler[Framed["Tap me"], {"Tap" -> (Print["Tapped!"] &)}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GestureHandler.html) for more details.*