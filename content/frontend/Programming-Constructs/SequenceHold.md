---
title: SequenceHold
---

`SequenceHold` is an attribute that specifies that Sequence objects appearing in the arguments of a function should not automatically be flattened out.

## Examples

Without SequenceHold, Sequence is flattened:

```wolfram
f[Sequence[a, b, c]]
(* f[a, b, c] *)
```

With SequenceHold attribute:

```wolfram
SetAttributes[g, SequenceHold];
g[Sequence[a, b, c]]
(* g[Sequence[a, b, c]] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceHold.html) for more details.