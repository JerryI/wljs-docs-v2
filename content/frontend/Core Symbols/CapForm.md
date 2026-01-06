# CapForm

`CapForm[type]` is a graphics primitive that specifies what type of caps should be used at the ends of lines, tubes, and related primitives.

## Examples

Different cap styles:

```wolfram
Graphics[{Thick, CapForm["Round"], Line[{{0, 0}, {1, 0}}]}]
```

Butt cap:

```wolfram
Graphics[{Thickness[0.1], CapForm["Butt"], Line[{{0, 0}, {1, 0}}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CapForm.html) for more details.*