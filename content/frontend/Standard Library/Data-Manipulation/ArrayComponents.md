---
title: ArrayComponents
---

`ArrayComponents[array]` gives an array in which all identical elements of array are replaced by an integer index representing the component in which the element lies.

`ArrayComponents[array,level]` finds the identical elements at the specified level in array.

`ArrayComponents[array,level,rules]` uses a rule or a list of rules for specifying the labels.

## Examples

```wolfram
ArrayComponents[{a, b, a, c, b, a}]
(* {1, 2, 1, 3, 2, 1} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayComponents.html) for more details.*