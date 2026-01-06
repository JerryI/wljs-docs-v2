---
title: FormLayoutFunction
---

`FormLayoutFunction` is an option for FormObject and FormFunction that can be used to specify how to lay out a form.

## Examples

Create a form with custom layout:

```wolfram
FormObject[{"x" -> "Number", "y" -> "Number"}, 
  FormLayoutFunction -> (Column[{#x, #y}] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FormLayoutFunction.html) for more details.*