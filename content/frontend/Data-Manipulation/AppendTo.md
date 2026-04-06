---
title: AppendTo
---

`AppendTo[x, elem]` appends elem to the value of x, and resets x to the result.

## Examples

Append an element to a list:

```wolfram
list = {1, 2, 3};
AppendTo[list, 4];
list
(* {1, 2, 3, 4} *)
```

Build a list incrementally:

```wolfram
result = {};
Do[AppendTo[result, i^2], {i, 5}];
result
(* {1, 4, 9, 16, 25} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AppendTo.html) for more details.