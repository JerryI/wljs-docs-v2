# TouchscreenAutoZoom

`TouchscreenAutoZoom` is an option for `Manipulate` and `Graphics3D` that determines whether the interface zooms to full-screen when it is activated by touching it on supported touch screen platforms.

## Examples

```wolfram
Manipulate[Plot[Sin[a x], {x, 0, 2 Pi}], {a, 1, 5}, TouchscreenAutoZoom -> False]
```

```wolfram
Graphics3D[Sphere[], TouchscreenAutoZoom -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TouchscreenAutoZoom.html) for more details.*