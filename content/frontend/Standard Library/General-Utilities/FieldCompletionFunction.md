---
title: FieldCompletionFunction
---

`FieldCompletionFunction` is an option for `InputField` that specifies a function to apply to the input field's contents to generate a list of completions.

## Examples

```wolfram
InputField["", String, FieldCompletionFunction -> (StringCases[#, ___] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FieldCompletionFunction.html) for more details.*