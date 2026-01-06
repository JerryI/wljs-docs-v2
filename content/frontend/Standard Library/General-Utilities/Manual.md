---
title: Manual
---

`Manual` represents an option or other value that is to be selected manually, usually by some form of interactive manipulation.

## Examples

With PlotRange:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi}, PlotRange -> Manual]
```

Interactive selection:

```wolfram
Manipulate[Plot[Sin[x], {x, 0, n}], {n, 1, 10}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Manual.html) for more details.*