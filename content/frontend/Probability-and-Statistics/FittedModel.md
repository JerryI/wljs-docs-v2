---
title: FittedModel
---

`FittedModel[...]` represents the symbolic fitted model obtained from functions like `LinearModelFit`.

## Examples

```wolfram
model = LinearModelFit[{{1, 2}, {2, 4}, {3, 5}}, x, x]
(* FittedModel[...] *)

model["BestFit"]
(* 0.666667 + 1.5 x *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FittedModel.html) for more details.