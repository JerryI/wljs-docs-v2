---
title: StringForm
---

`StringForm["controlstring", expr1, ...]` prints as the text of the controlstring, with the printed forms of the expri embedded.

## Examples

Format a string:

```wolfram
StringForm["The value is ``.", 42]
(* "The value is 42." *)
```

Multiple placeholders:

```wolfram
StringForm["`` + `` = ``", 2, 3, 5]
(* "2 + 3 = 5" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringForm.html) for more details.