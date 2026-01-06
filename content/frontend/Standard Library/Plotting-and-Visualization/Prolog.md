# Prolog

`Prolog` is an option for graphics functions which gives a list of graphics primitives to be rendered before the main part of the graphics is rendered.

## Examples

Add background before main graphics:
```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Prolog -> {LightGray, Rectangle[{0, -1}, {2 Pi, 1}]}]
```

Draw grid lines as prolog:
```wolfram
Graphics[Circle[], Prolog -> {Dashed, Line[{{-1, 0}, {1, 0}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Prolog.html) for more details.*