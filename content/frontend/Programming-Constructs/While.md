---
title: While
---

`While[test, body]` evaluates test, then body, repetitively, until test first fails to give True.

## Example

Count until a condition is met:

```wolfram
n = 1;
While[n < 100, n = 2*n];
n
(* 128 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/While.html) for more details.