---
title: ByteArrayQ
---

`ByteArrayQ[expr]` gives True if expr is a valid ByteArray object, and False otherwise.

## Examples

Test byte array:

```wolfram
ByteArrayQ[ByteArray[{1, 2, 3}]]
(* True *)
```

Non-byte array:

```wolfram
ByteArrayQ[{1, 2, 3}]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ByteArrayQ.html) for more details.