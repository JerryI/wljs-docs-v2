---
title: Duration
---

`Duration[expr]` returns the duration of expr.

`Duration[expr, unit]` returns the result in the specified unit.

## Examples

Get the duration of an audio object:

```wolfram
audio = ExampleData[{"Audio", "Apollo11SmallStep"}];
Duration[audio]
(* 5.4 seconds *)
```

Get duration in a specific unit:

```wolfram
Duration[audio, "Milliseconds"]
(* 5400. *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Duration.html) for more details.