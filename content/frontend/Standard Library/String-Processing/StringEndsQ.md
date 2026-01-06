---
title: StringEndsQ
---

`StringEndsQ["string", patt]` yields `True` if the end of the string matches the pattern.

`StringEndsQ[patt]` represents an operator form.

## Examples

Check suffix:

```wolfram
StringEndsQ["Hello World", "World"]
(* True *)
```

```wolfram
StringEndsQ["Hello World", "Hello"]
(* False *)
```

Filter by file extension:

```wolfram
Select[{"file.txt", "image.png", "data.txt"}, StringEndsQ[".txt"]]
(* {"file.txt", "data.txt"} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringEndsQ.html) for more details.*