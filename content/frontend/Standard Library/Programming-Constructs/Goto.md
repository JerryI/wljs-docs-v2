# Goto

`Goto[tag]` scans for `Label[tag]`, and transfers control to that point.

## Examples

```wolfram
Module[{i = 1},
  Label[start];
  If[i < 5, i++; Goto[start]];
  i
]
```

```wolfram
Do[If[i == 3, Goto[done]]; Print[i], {i, 5}]; Label[done];
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Goto.html) for more details.*