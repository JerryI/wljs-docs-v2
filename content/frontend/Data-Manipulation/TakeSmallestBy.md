---
title: TakeSmallestBy
---

`TakeSmallestBy[data,f,n]` gives the n elements ei in data for which f[ei] is smallest, sorted in ascending order.

`TakeSmallestBy[data->prop,f,n]` gives the property prop for the n elements in data for which f[ei] is smallest.

`TakeSmallestBy[data,f,n,p]` uses the ordering function p for sorting.

`TakeSmallestBy[f,n]` represents an operator form of TakeSmallestBy that can be applied to an expression.

## Examples

Get the 2 smallest elements by absolute value:

```wolfram
TakeSmallestBy[{-5, 2, 10, -3}, Abs, 2]
(* {2, -3} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TakeSmallestBy.html) for more details.