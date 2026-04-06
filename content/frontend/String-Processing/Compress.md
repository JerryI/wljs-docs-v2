---
title: Compress
---

`Compress[expr]` gives a compressed representation of expr as a string.

## Examples

Compress an expression:

```wolfram
Compress[Range[1000]]
(* "1:eJxTTMoPSmNkYG..." *)
```

Decompress back:

```wolfram
Uncompress[Compress[{1, 2, 3}]]
(* {1, 2, 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Compress.html) for more details.