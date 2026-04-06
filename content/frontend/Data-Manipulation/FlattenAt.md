---
title: FlattenAt
---

`FlattenAt[list, n]` flattens out a sublist that appears as the nth element of list.

`FlattenAt[expr, {i, j, ...}]` flattens out the part of expr at the specified position.

## Examples

Flatten at position 2:

```wolfram
FlattenAt[{a, {b, c}, d}, 2]
(* {a, b, c, d} *)
```

Flatten at nested position:

```wolfram
FlattenAt[{{a, {b, c}}, d}, {1, 2}]
(* {{a, b, c}, d} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FlattenAt.html) for more details.