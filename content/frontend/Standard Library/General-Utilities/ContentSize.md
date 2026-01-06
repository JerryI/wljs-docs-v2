---
title: ContentSize
---

`ContentSize` is an option for `Manipulate` and other functions that specifies the size of the content area to use.

## Examples

Set a fixed content size for a Manipulate:

```wolfram
Manipulate[Plot[Sin[a x], {x, 0, 2 Pi}], {a, 1, 5}, ContentSize -> {300, 200}]
```

Set only the width:

```wolfram
Manipulate[x^2, {x, 1, 10}, ContentSize -> {400, Automatic}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContentSize.html) for more details.*