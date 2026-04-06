---
title: Pause
---

`Pause[n]` pauses evaluation for at least n seconds.

## Examples

Pause for 2 seconds:

```wolfram
Pause[2]
(* Null - returns after 2 seconds *)
```

Use Pause in a loop for delayed output:

```wolfram
Do[Print[i]; Pause[0.5], {i, 3}]
(* Prints 1, 2, 3 with 0.5 second delays *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Pause.html) for more details.