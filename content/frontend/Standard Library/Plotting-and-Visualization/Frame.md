# Frame

`Frame` is an option for `Graphics`, `Grid`, and other constructs that specifies whether to include a frame.

## Examples

Plot with frame:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, Frame -> True]
```

Selective framing:

```wolfram
Plot[Cos[x], {x, 0, 2 Pi}, Frame -> {{True, False}, {True, False}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Frame.html) for more details.*