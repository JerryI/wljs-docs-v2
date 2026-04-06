---
title: Flatten
---

`Flatten[list]` flattens out nested lists.

`Flatten[list, n]` flattens to level n.

## Examples

Completely flatten a nested list:

```wolfram
Flatten[{{a, b}, {c, {d, e}}}]
(* {a, b, c, d, e} *)
```

Flatten only one level:

```wolfram
Flatten[{{a, b}, {c, {d, e}}}, 1]
(* {a, b, c, {d, e}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Flatten.html) for more details.