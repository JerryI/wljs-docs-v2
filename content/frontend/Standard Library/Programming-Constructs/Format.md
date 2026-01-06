---
title: Format
---

`Format[expr]` prints as the formatted form of expr. Assigning values to `Format[expr]` defines print forms.

`Format[expr, form]` gives a format for the specified form of output.

## Examples

Define custom formatting:

```wolfram
Format[myObj[x_]] := Framed[x]
myObj[hello]
(* displays as framed "hello" *)
```

Standard form:

```wolfram
Format[vec[a_, b_], StandardForm] := Row[{"⟨", a, ", ", b, "⟩"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Format.html) for more details.*