---
title: CenterArray
---

`CenterArray[a, n]` creates a list of length n with the elements of a at the center and zeros elsewhere.

`CenterArray[a, {n1, n2, ...}]` creates an n1×n2×... array with the array a at the center and zeros elsewhere.

`CenterArray[a, nspec, pad]` uses pad instead of zero for the background.

`CenterArray[nspec]` creates an array with a single 1 at the center and zeros elsewhere.

## Examples

Center a list in a larger array:

```wolfram
CenterArray[{1, 2, 3}, 7]
(* {0, 0, 1, 2, 3, 0, 0} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CenterArray.html) for more details.