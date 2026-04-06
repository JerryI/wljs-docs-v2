---
title: CharacterRange
---

`CharacterRange["c1", "c2"]` yields a list of the characters in the range from c1 to c2.

`CharacterRange[n1, n2]` yields a list of the characters with character codes in the range n1 to n2.

## Examples

Range of uppercase letters:

```wolfram
CharacterRange["A", "Z"]
(* {"A", "B", "C", ..., "Z"} *)
```

Range using character codes:

```wolfram
CharacterRange[97, 102]
(* {"a", "b", "c", "d", "e", "f"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CharacterRange.html) for more details.