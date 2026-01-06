---
title: StringMatchQ
---

`StringMatchQ["string", patt]` tests whether the entire string matches the pattern.

`StringMatchQ[patt]` represents an operator form.

## Examples

Match with wildcard:

```wolfram
StringMatchQ["Hello World", "Hello*"]
(* True *)
```

Match entire string:

```wolfram
StringMatchQ["abc123", LetterCharacter..]
(* False *)
```

With regex:

```wolfram
StringMatchQ["test@example.com", RegularExpression[".+@.+\\..+"]]
(* True *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringMatchQ.html) for more details.*