---
title: ExtractLayer
---

`ExtractLayer[]` represents a net layer that takes an array and a position specification as inputs and extracts the specified parts from the array.

## Examples

```wolfram
(* Create an extract layer *)
layer = ExtractLayer[]

(* Apply to an array with position *)
layer[<|"Array" -> {1, 2, 3, 4}, "Position" -> 2|>]

(* Use in a neural network *)
net = NetChain[{LinearLayer[10], ExtractLayer[]}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtractLayer.html) for more details.