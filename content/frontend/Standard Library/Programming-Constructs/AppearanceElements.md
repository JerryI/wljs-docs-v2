---
title: AppearanceElements
---

`AppearanceElements` is an option for functions like `Manipulate` that specifies what elements should be included in the displayed form of the object generated.

## Examples

Create a Manipulate with minimal appearance:

```wolfram
Manipulate[Plot[Sin[a x], {x, 0, 2 Pi}], {a, 1, 5}, AppearanceElements -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AppearanceElements.html) for more details.*