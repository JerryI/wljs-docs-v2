---
title: Character
---

`Character` represents a single character in `Read`.

## Examples

Read a single character from a stream:

```wolfram
stream = StringToStream["Hello"];
Read[stream, Character]
(* "H" *)
```

Read multiple characters:

```wolfram
stream = StringToStream["ABC"];
Table[Read[stream, Character], 3]
(* {"A", "B", "C"} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Character.html) for more details.