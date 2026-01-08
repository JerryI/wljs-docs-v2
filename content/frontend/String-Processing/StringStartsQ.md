---
title: StringStartsQ
---

`StringStartsQ["string", patt]` yields `True` if the beginning of the string matches the pattern.

`StringStartsQ[patt]` represents an operator form.

## Examples

Check prefix:

```wolfram
StringStartsQ["Hello World", "Hello"]
(* True *)
```

```wolfram
StringStartsQ["Hello World", "World"]
(* False *)
```

Filter strings by prefix:

```wolfram
Select[{"apple", "apricot", "banana"}, StringStartsQ["ap"]]
(* {"apple", "apricot"} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringStartsQ.html) for more details.