---
title: StringContainsQ
---

`StringContainsQ["string", patt]` yields `True` if any substring matches the pattern.

`StringContainsQ[patt]` represents an operator form.

## Examples

Check for substring:

```wolfram
StringContainsQ["Hello World", "World"]
(* True *)
```

```wolfram
StringContainsQ["Hello World", "Goodbye"]
(* False *)
```

With patterns:

```wolfram
StringContainsQ["abc123", DigitCharacter]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringContainsQ.html) for more details.