---
title: Thread
---

`Thread[f[args]]` threads f over any lists that appear in args.

## Examples

Thread over lists:

```wolfram
Thread[f[{a, b, c}, {1, 2, 3}]]
(* {f[a, 1], f[b, 2], f[c, 3]} *)
```

Create rules:

```wolfram
Thread[{a, b, c} -> {1, 2, 3}]
(* {a -> 1, b -> 2, c -> 3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thread.html) for more details.