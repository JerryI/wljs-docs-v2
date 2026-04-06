---
title: Until
---

`Until[test, body]` evaluates body and then test, repetitively, until test first gives `True`.

## Examples

Repeat until condition is met:

```wolfram
n = 0;
Until[n > 5, n++];
n
(* 6 *)
```

The body is always executed at least once.


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Until.html) for more details.