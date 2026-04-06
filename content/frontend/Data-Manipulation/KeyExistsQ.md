---
title: KeyExistsQ
---

`KeyExistsQ[assoc, key]` returns `True` if the specified key exists in the association assoc, and `False` otherwise.

`KeyExistsQ[key]` represents an operator form of `KeyExistsQ` that can be applied to an expression.

## Examples

Check if key exists:

```wolfram
KeyExistsQ[<|"a" -> 1, "b" -> 2|>, "a"]
(* True *)
```

Non-existent key:

```wolfram
KeyExistsQ[<|"a" -> 1, "b" -> 2|>, "c"]
(* False *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KeyExistsQ.html) for more details.