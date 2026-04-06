---
title: CharacterNormalize
---

`CharacterNormalize["text", form]` converts the characters in text to the specified normalization form.

## Examples

Normalize text to NFC form:

```wolfram
CharacterNormalize["café", "NFC"]
(* "café" *)
```

Normalize to decomposed form:

```wolfram
CharacterNormalize["naïve", "NFD"]
(* "naïve" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CharacterNormalize.html) for more details.