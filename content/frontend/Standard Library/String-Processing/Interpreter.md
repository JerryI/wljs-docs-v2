---
title: Interpreter
---

`Interpreter[form]` represents an interpreter object that can interpret input as an object of the specified form.

`Interpreter[form, test]` validates with the test function.

## Examples

Interpret a date:

```wolfram
Interpreter["Date"]["January 1, 2020"]
(* DateObject[{2020, 1, 1}] *)
```

Number interpretation:

```wolfram
Interpreter["Number"]["42.5"]
(* 42.5 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interpreter.html) for more details.*